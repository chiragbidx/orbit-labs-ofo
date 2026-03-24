# Changelog

## 2024-06-11 MailPilot onboarding and dashboard foundation

- Updated `content/home.ts` for full MailPilot homepage experience: headline, features, CTAs, nav
- Branded all auth pages and helper texts (sign in, sign up, forgot/reset password)
- Dashboard sidebar, logo, and navigation now use MailPilot name and icons
- Dashboard Overview (`/dashboard`), Campaigns, Campaign Create, Subscribers, and Analytics pages added, all on-brand, with empty states and MailPilot copy
- Added `/dashboard/subscribers/new` empty state route for future bulk/individual imports
- All sidebar navigation reflects correct label and order (Dashboard, Campaigns, Subscribers, Analytics)
- No changes to DB, server actions, or logic layers; strictly presentation, copy, navigation