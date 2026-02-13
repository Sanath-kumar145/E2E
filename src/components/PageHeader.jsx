export default function PageHeader({ title, subtitle, right }) {
return (
<div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="min-w-0">
<h1 className="truncate text-xl font-semibold text-slate-100">{title}</h1>
{subtitle ? (
<p className="mt-1 text-sm text-slate-400">{subtitle}</p>
) : null}
</div>


{right ? <div className="flex items-center gap-2">{right}</div> : null}
</div>
)
}