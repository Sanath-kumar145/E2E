export default function Input({ className = '', ...props }) {
return (
<input
className={
'h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20 ' +
className
}
{...props}
/>
)
}