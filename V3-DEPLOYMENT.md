# Swift Cargo CRM V3 — Performance Edition

Based on the supplied updated ZIP. HTML, CSS, React shell, deployment configuration, Supabase connection and storage keys are unchanged. Existing conditional auto-feedback writes remain part of the original CRM behavior; V3 runs at most four concurrently. No database changes have been executed.

## Changes
- JOC source/lookup and company exact-lookup spreadsheet matrix parsing moved to a Web Worker with original SheetJS options and a synchronous fallback. The worker uses the existing pinned CDN dependency; large workbooks still require memory and subsequent processing may block.
- Swift classification workbook row extraction yields every 500 rows; ExcelJS semantics retained.
- Initial duplicate detection yields in batches; failed record fetch retains existing in-memory data instead of clearing it.
- Assignment fallback polling every 15 seconds rather than six; realtime unchanged. Without realtime, assignment visibility may be delayed.
- Optional concurrent PostgreSQL indexes in database/optional-indexes.sql. Review existing indexes and execute individually outside a transaction with a database administrator. Do not run blindly on production.

## Safe deployment
1. Back up Supabase database and Storage separately; export browser-local/IndexedDB data using existing application facilities where available. Preserve the same production origin and browser profile. Keep the prior Git commit and ZIP. Verify backups can be restored.
2. Extract into a separate staging directory. Run npm ci, npm run build, npm run dev. Test against a separate test database or read-only/test accounts, not production customer records. Existing connection defaults point to the original project: do not perform destructive staging tests against it.
3. Compare dashboard counts, assignments, search, record edits, exports and all three toolkits against the prior release using identical representative files. Verify JOC dates, lookup sheet mapping, Swift identifiers, exact lookup counts and export results. Check worker fallback and failed network requests. Test admin and non-admin access.
4. Measure browser performance and Supabase query plans before/after. Apply optional indexes only after review. Existing global record limit, client-side tables, dashboard aggregation and legacy runtime remain; server pagination and full backend rewrite are not implemented.
5. Commit reviewed files to a branch, then merge into the existing repository after acceptance. Existing GitHub Actions deploys the main branch. Keep production URL unchanged. Roll back by reverting the release commit if needed; code rollback does not undo database writes.

## Verification
Node syntax checks passed for both scripts. npm ci offline failed because a dependency was not cached; production build, live Supabase, worker CDN loading, spreadsheet parity and browser tests are not verified. No latency or zero-data-loss guarantee is made. No live database was accessed.
