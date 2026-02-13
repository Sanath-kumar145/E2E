import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Modal from '../components/ui/Modal'
import { signals as dummySignals } from '../data/dummy'
import { Settings2, SlidersHorizontal } from 'lucide-react'

export default function SignalsControl() {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return dummySignals.filter((s) => {
      const matchesQ =
        !q ||
        s.id.toLowerCase().includes(q) ||
        s.junction.toLowerCase().includes(q)

      const matchesMode =
        mode === 'all' ? true : s.mode.toLowerCase() === mode

      return matchesQ && matchesMode
    })
  }, [query, mode])

  const tone = (status) => {
    if (status === 'optimal') return 'good'
    if (status === 'busy') return 'warn'
    return 'bad'
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Signals Control"
        subtitle="Manage AI/manual modes and cycle time (dummy UI)"
        right={
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search junction..."
              className="sm:w-[220px]"
            />
            <Select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="sm:w-[160px]"
            >
              <option value="all">All modes</option>
              <option value="ai">AI</option>
              <option value="manual">Manual</option>
            </Select>
          </div>
        }
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((s) => (
          <Card key={s.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="min-w-0">
                <CardTitle>{s.junction}</CardTitle>
                <div className="mt-1 text-xs text-slate-400">{s.id}</div>
              </div>
              <Badge tone={tone(s.status)}>{s.status}</Badge>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-400">Mode</div>
                  <div className="text-sm font-semibold text-slate-100">
                    {s.mode}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-400">Cycle Time</div>
                  <div className="text-sm font-semibold text-slate-100">
                    {s.cycleSeconds}s
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-400">Updated</div>
                  <div className="text-sm font-semibold text-slate-100">
                    {s.lastUpdated}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-400">AI Controller</div>
                  <div className="text-sm font-semibold text-slate-100">
                    Active
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="ghost" onClick={() => setSelected(s)}>
                  <Settings2 className="h-4 w-4" />
                  Configure
                </Button>

                <Button variant="primary">
                  <SlidersHorizontal className="h-4 w-4" />
                  Apply Optimized Cycle
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `Configure ${selected.junction}` : 'Configure Signal'}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" onClick={() => setSelected(null)}>
              Cancel
            </Button>
            <Button onClick={() => setSelected(null)}>Save (dummy)</Button>
          </div>
        }
      >
        {selected ? (
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-xs text-slate-400">Mode</label>
              <Select defaultValue={selected.mode.toLowerCase()}>
                <option value="ai">AI</option>
                <option value="manual">Manual</option>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-xs text-slate-400">
                Cycle Time (seconds)
              </label>
              <Input
                type="number"
                defaultValue={selected.cycleSeconds}
                min={30}
                max={180}
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-400">
              This is UI-only. Later connect <code>api.updateSignal()</code>.
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  )
}