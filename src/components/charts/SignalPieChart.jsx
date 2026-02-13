import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'


const COLORS = ['#38BDF8', '#34D399', '#FBBF24', '#FB7185']


export default function SignalPieChart({ data }) {
return (
<div className="h-72 w-full">
<ResponsiveContainer width="100%" height="100%">
<PieChart>
<Tooltip
contentStyle={{
background: '#0A1020',
border: '1px solid rgba(255,255,255,0.12)',
borderRadius: 12,
}}
/>
<Pie
data={data}
dataKey="value"
nameKey="name"
innerRadius={55}
outerRadius={85}
paddingAngle={3}
>
{data.map((_, idx) => (
<Cell key={idx} fill={COLORS[idx % COLORS.length]} />
))}
</Pie>
</PieChart>
</ResponsiveContainer>
</div>
)
}