-- Optional: run separately in Supabase SQL editor after backup and review.
-- No rows, policies, or existing columns are changed. Index creation consumes resources.
-- Execute each statement individually outside a transaction; inspect existing indexes first.
CREATE INDEX CONCURRENTLY IF NOT EXISTS crm_v3_records_import_date_idx ON public.records (import_date DESC);
CREATE INDEX CONCURRENTLY IF NOT EXISTS crm_v3_records_updated_at_idx ON public.records (updated_at DESC);
CREATE INDEX CONCURRENTLY IF NOT EXISTS crm_v3_records_database_id_id_idx ON public.records (database_id, id);
CREATE INDEX CONCURRENTLY IF NOT EXISTS crm_v3_records_database_name_id_idx ON public.records (database_name, id);
CREATE INDEX CONCURRENTLY IF NOT EXISTS crm_v3_records_feedback_id_idx ON public.records (feedback, id);
