import { X } from 'lucide-react'


export default function Modal({ open, onClose, title, children, footer }) {
if (!open) return null


return (
<div className="fixed inset-0 z-50 flex items-center justify-center px-3">
<div
className="absolute inset-0 bg-black/70 backdrop-blur-sm"
onClick={onClose}
/>


<div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0A1020] shadow-glow">
<div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
<div className="text-sm font-semibold text-slate-100">{title}</div>
<button
onClick={onClose}
className="rounded-xl p-2 hover:bg-white/5"
aria-label="Close"
>
<X className="h-5 w-5" />
</button>
</div>


<div className="p-5">{children}</div>


{footer ? (
<div className="border-t border-white/10 px-5 py-4">{footer}</div>
) : null}
</div>
</div>
)
}