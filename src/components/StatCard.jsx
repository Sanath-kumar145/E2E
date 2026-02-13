import { Card, CardContent } from './ui/Card'


export default function StatCard({ icon: Icon, label, value, hint, tone = 'info' }) {
const toneMap = {
info: 'bg-sky-500/15 text-sky-200 border-sky-500/20',
good: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/20',
warn: 'bg-amber-500/15 text-amber-200 border-amber-500/20',
bad: 'bg-rose-500/15 text-rose-200 border-rose-500/20',
}


return (
<Card className="h-full">
<CardContent>
<div className="flex items-start gap-3">
<div
className={
'rounded-2xl border p-3 ' +
(toneMap[tone] || toneMap.info)
}
>
<Icon className="h-5 w-5" />
</div>


<div className="min-w-0">
<div className="text-xs uppercase tracking-wider text-slate-400">
{label}
</div>
<div className="mt-1 text-2xl font-semibold text-slate-100">
{value}
</div>
{hint ? (
<div className="mt-1 text-xs text-slate-400">{hint}</div>
) : null}
</div>
</div>
</CardContent>
</Card>
)
}