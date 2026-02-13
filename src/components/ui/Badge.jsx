export default function Badge({ children, tone = 'neutral' }) {
const tones = {
neutral: 'bg-white/10 text-slate-200 border-white/10',
good: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/20',
warn: 'bg-amber-500/15 text-amber-200 border-amber-500/20',
bad: 'bg-rose-500/15 text-rose-200 border-rose-500/20',
info: 'bg-sky-500/15 text-sky-200 border-sky-500/20',
}


return (
<span
className={
'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ' +
tones[tone]
}
>
{children}
</span>
)
}