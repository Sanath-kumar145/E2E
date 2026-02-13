export function Card({ className = '', children }) {
return (
<div
className={
'rounded-2xl border border-white/10 bg-white/5 shadow-glow ' + className
}
>
{children}
</div>
)
}


export function CardHeader({ className = '', children }) {
return (
<div className={'border-b border-white/10 px-5 py-4 ' + className}>
{children}
</div>
)
}


export function CardTitle({ className = '', children }) {
return (
<div className={'text-sm font-semibold tracking-wide text-slate-100 ' + className}>
{children}
</div>
)
}


export function CardContent({ className = '', children }) {
return <div className={'p-5 ' + className}>{children}</div>
}