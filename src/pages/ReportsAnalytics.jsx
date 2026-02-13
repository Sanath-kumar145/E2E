import PageHeader from '../components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import TrafficLineChart from '../components/charts/TrafficLineChart'
import ViolationBarChart from '../components/charts/ViolationBarChart'
import { reports } from '../data/dummy'


export default function ReportsAnalytics() {
const traffic = reports.weeklyTraffic.map((x) => ({ time: x.day, vehicles: x.vehicles }))
const vio = reports.weeklyViolations.map((x) => ({ type: x.day, count: x.count }))


return (
<div className="space-y-4">
<PageHeader
title="Reports / Analytics"
subtitle="Weekly trends (dummy data)"
/>


<section className="grid gap-4 lg:grid-cols-2">
<Card>
<CardHeader>
<CardTitle>Weekly Traffic Volume</CardTitle>
</CardHeader>
<CardContent>
<TrafficLineChart data={traffic} />
</CardContent>
</Card>


<Card>
<CardHeader>
<CardTitle>Weekly Violations</CardTitle>
</CardHeader>
<CardContent>
<ViolationBarChart data={vio} />
</CardContent>
</Card>
</section>


<Card>
<CardHeader>
<CardTitle>Export (UI only)</CardTitle>
</CardHeader>
<CardContent>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-400">
Add Export buttons later (CSV/PDF). Backend endpoints can be plugged in using
<code> services/api.js</code>.
</div>
</CardContent>
</Card>
</div>
)
}