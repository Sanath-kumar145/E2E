import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid,
} from 'recharts'


export default function ViolationBarChart({ data }) {
return (
<div className="h-72 w-full">
<ResponsiveContainer width="100%" height="100%">
<BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
<XAxis dataKey="type" stroke="rgba(148,163,184,0.6)" />
<YAxis stroke="rgba(148,163,184,0.6)" />
<Tooltip
contentStyle={{
background: '#0A1020',
border: '1px solid rgba(255,255,255,0.12)',
borderRadius: 12,
}}
/>
<Bar dataKey="count" fill="#A78BFA" radius={[10, 10, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>
)
}