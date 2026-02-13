import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import { liveCameras } from '../data/dummy'
import { Video, Search } from 'lucide-react'

export default function LiveMonitoring() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return liveCameras
    return liveCameras.filter(
      (c) =>
        c.id.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.status.toLowerCase().includes(q)
    )
  }, [query])

  const toneFor = (status) => {
    if (status === 'online') return 'good'
    if (status === 'maintenance') return 'warn'
    return 'bad'
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Live Monitoring"
        subtitle="Camera tiles (dummy stream placeholders)"
        right={
          <div className="relative w-full sm:w-[320px]">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <Input
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search camera, location..."
            />
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((cam) => (
          <Card key={cam.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="min-w-0">
                <CardTitle>{cam.id}</CardTitle>
                <div className="mt-1 truncate text-xs text-slate-400">
                  {cam.location}
                </div>
              </div>
              <Badge tone={toneFor(cam.status)}>{cam.status}</Badge>
            </CardHeader>

            <CardContent>
              <div className="aspect-video rounded-2xl border border-white/10 bg-black/30 grid place-items-center">
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <Video className="h-6 w-6" />
                  <div className="text-xs">Stream placeholder</div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-400">FPS</div>
                  <div className="text-sm font-semibold text-slate-100">24</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-400">AI Alerts</div>
                  <div className="text-sm font-semibold text-slate-100">
                    Enabled
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}