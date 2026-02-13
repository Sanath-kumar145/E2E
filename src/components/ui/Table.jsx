export function Table({ children }) {
return (
<div className="w-full overflow-x-auto">
<table className="w-full min-w-[820px] border-separate border-spacing-0">
{children}
</table>
</div>
)
}


export function THead({ children }) {
return (
<thead>
<tr className="text-left text-xs uppercase tracking-wider text-slate-400">
{children}
</tr>
</thead>
)
}


export function TH({ children }) {
return (
<th className="sticky top-0 border-b border-white/10 bg-[#0A1020] px-4 py-3">
{children}
</th>
)
}


export function TBody({ children }) {
return <tbody className="text-sm text-slate-200">{children}</tbody>
}


export function TR({ children }) {
return (
<tr className="border-b border-white/10 hover:bg-white/5 transition">
{children}
</tr>
)
}


export function TD({ children }) {
return <td className="border-b border-white/10 px-4 py-3">{children}</td>
}