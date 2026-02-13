import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import TrafficLineChart from '../components/charts/TrafficLineChart'
import ViolationBarChart from '../components/charts/ViolationBarChart'
import SignalPieChart from '../components/charts/SignalPieChart'

import {
  dashboardStats,
  trafficTrend,
  violationSummary,
  signalStatus,
} from '../data/dummy'
import { formatNumber } from '../utils/format'

import { Car, Gauge, TrafficCone, ShieldAlert } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Dashboard"
        subtitle="Overview of traffic flow, signals, and violations (dummy data)"
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Car}
          label="Vehicles Today"
          value={formatNumber(dashboardStats.totalVehiclesToday)}
          hint="Detected across all junctions"
          tone="info"
        />
        <StatCard
          icon={Gauge}
          label="Avg Speed"
          value={`${dashboardStats.avgSpeed} km/h`}
          hint="Current rolling average"
          tone="good"
        />
        <StatCard
          icon={TrafficCone}
          label="Active Signals"
          value={formatNumber(dashboardStats.activeSignals)}
          hint="AI + manual control"
          tone="warn"
        />
        <StatCard
          icon={ShieldAlert}
          label="Violations Today"
          value={formatNumber(dashboardStats.violationsToday)}
          hint="Auto-detected events"
          tone="bad"
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Trend (Vehicles / Hour)</CardTitle>
          </CardHeader>
          <CardContent>
            <TrafficLineChart data={trafficTrend} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Violation Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ViolationBarChart data={violationSummary} />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Signals Status</CardTitle>
          </CardHeader>

          <CardContent>
            <SignalPieChart data={signalStatus} />

            <div className="mt-4 grid grid-cols-2 gap-2">
              {signalStatus.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div className="text-xs text-slate-400">{s.name}</div>
                  <div className="text-lg font-semibold text-slate-100">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>AI Insights (Demo)</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Suggested Optimization
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Increase green time at{' '}
                  <b className="text-slate-200">Vyttila Hub</b> during peak hours
                  due to congestion probability.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Violation Hotspot
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  High overspeed risk near{' '}
                  <b className="text-slate-200">Kochi Metro</b> — increase
                  monitoring and alert frequency.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-sm font-semibold text-slate-100">
                Next Steps
              </div>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-400">
                <li>
                  Connect backend API endpoints in <code>services/api.js</code>
                </li>
                <li>Replace dummy charts with real-time metrics</li>
                <li>Add role-based access control (Admin/Operator)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}