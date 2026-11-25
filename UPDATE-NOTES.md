# CRM maintenance update

- Removed accidental React document and merge separator from legacy HTML; linked the existing runtime as a relative external script. All original inline styles and markup retained.
- JOC: reset stale workbook state on new uploads, normalize recognized headers, require valid lookup sheets before enabling processing, align partial workbook validation with conditional pipeline (Shipper required), show actual review counts, limit rendered log entries to 500 while retaining full log text.
- JOC and Swift: permit selecting the same file again and report rejected upload promises.
- No database migrations, credential changes, storage-key changes or production operations performed. Company removal behavior unchanged.

Validation: JavaScript syntax passed; HTML contains one document and no duplicate element IDs; toolkit card and action IDs present. Full npm build blocked by unavailable dependency cache. No live Supabase or real workbook end-to-end tests performed. Performance improvement is targeted, not benchmarked.

Before deployment: export/backup Supabase data and storage, preserve browser IndexedDB/localStorage on the existing origin, retain original Git commit, run npm ci and npm run build, test all three toolkits with copies of real workbooks in a non-production environment. Never test removal against live records. Keep original production URL for browser-local data continuity. A source archive is not a database backup.
