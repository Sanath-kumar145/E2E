export default function Button({
children,
className = '',
variant = 'primary',
size = 'md',
...props
}) {
const base =
'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-500/60 disabled:opacity-60 disabled:cursor-not-allowed'


const variants = {
primary:
'bg-sky-500/90 hover:bg-sky-500 text-slate-950 shadow-glow',
ghost:
'bg-transparent hover:bg-white/5 text-slate-200 border border-white/10',
danger:
'bg-rose-500/90 hover:bg-rose-500 text-white',
}


const sizes = {
md: 'h-10 px-4 text-sm',
sm: 'h-9 px-3 text-sm',
lg: 'h-11 px-5 text-sm',
}


return (
<button
className={[base, variants[variant], sizes[size], className].join(' ')}
{...props}
>
{children}
</button>
)
}