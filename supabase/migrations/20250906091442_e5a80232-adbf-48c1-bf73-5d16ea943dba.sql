-- SECURITY FIX: Remove unsafe credit card storage
-- This addresses the critical security vulnerability of storing credit card data in plain text

-- Drop the cards table entirely to eliminate PCI DSS compliance risks
DROP TABLE IF EXISTS public.cards CASCADE;

-- Drop the card generation function as it's no longer needed
DROP FUNCTION IF EXISTS public.generate_card_number(text);

-- Drop the trigger function that creates default cards
DROP FUNCTION IF EXISTS public.create_default_card_for_account() CASCADE;

-- Remove card-related functionality from accounts table since we'll use payment processors
-- The accounts table can remain for user account balance tracking (non-card related)

-- Note: Payment processing will now be handled securely through Stripe or similar PCI-compliant processors
-- No credit card data will be stored in our database, only payment transaction references