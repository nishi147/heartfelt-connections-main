<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Use reusable ALYSTRO presentation modules and centralized program/FAQ content; this keeps the future CMS transition independent from layout.
- Keep this phase frontend-only and label mock records and unconnected forms clearly; no authentication or verification claims without a connected service.
- Give every content route its own metadata and retain TanStack file routing; all navigation targets must have a real page or on-page section.
- Express visual styles through global semantic tokens and the shared Button; this keeps brand styling consistent across every page.
