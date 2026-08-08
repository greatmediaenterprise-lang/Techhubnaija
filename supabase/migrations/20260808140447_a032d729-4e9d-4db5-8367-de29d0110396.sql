-- 1. Fix mutable search_path on handle_new_user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  RETURN new;
END;
$function$;

-- 2. Revoke EXECUTE on SECURITY DEFINER functions from API roles
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.generate_account_number() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.generate_card_number(text) FROM PUBLIC, anon, authenticated;

-- 3. Remove anon exposure of sensitive tables (all policies are auth.uid() scoped)
REVOKE ALL ON public.accounts FROM anon;
REVOKE ALL ON public.cards FROM anon;
REVOKE ALL ON public.transactions FROM anon;
REVOKE ALL ON public.profiles FROM anon;
REVOKE ALL ON public.cart FROM anon;

GRANT SELECT, INSERT, UPDATE ON public.accounts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cards TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cart TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;

-- 4. Transactions are immutable: no UPDATE/DELETE privileges at all
REVOKE UPDATE, DELETE ON public.transactions FROM authenticated;
GRANT SELECT, INSERT ON public.transactions TO authenticated;

-- 5. Cards: owner-scoped DELETE policy
DROP POLICY IF EXISTS "Users can delete cards for their accounts" ON public.cards;
CREATE POLICY "Users can delete cards for their accounts"
ON public.cards
FOR DELETE
TO authenticated
USING (EXISTS (
  SELECT 1 FROM public.accounts
  WHERE accounts.id = cards.account_id AND accounts.user_id = auth.uid()
));

-- 6. Explicit deny policies making transaction immutability unambiguous
DROP POLICY IF EXISTS "Transactions cannot be updated" ON public.transactions;
CREATE POLICY "Transactions cannot be updated"
ON public.transactions
FOR UPDATE
TO authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "Transactions cannot be deleted" ON public.transactions;
CREATE POLICY "Transactions cannot be deleted"
ON public.transactions
FOR DELETE
TO authenticated
USING (false);