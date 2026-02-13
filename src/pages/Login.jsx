import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Mail } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@traffic.ai')
  const [password, setPassword] = useState('admin123')
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Dummy login
    setTimeout(() => {
      localStorage.setItem('stm_token', 'demo-token')
      setLoading(false)
      navigate('/dashboard')
    }, 700)
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1200px] items-center justify-center px-4">
        <div className="grid w-full gap-6 lg:grid-cols-2">
          {/* Left side (desktop only) */}
          <div className="hidden lg:flex">
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-10 shadow-glow">
              <div className="text-xs uppercase tracking-wider text-slate-400">
                Smart Traffic Management System
              </div>

              <h1 className="mt-3 text-3xl font-semibold text-slate-100">
                Dark AI Dashboard
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Monitor live traffic feeds, optimize signals, track violations,
                and generate analytics for faster decisions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Live Monitoring</div>
                  <div className="mt-1 text-xs text-slate-400">
                    Camera streams + AI detection
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Signal Control</div>
                  <div className="mt-1 text-xs text-slate-400">
                    AI & manual cycle adjustments
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Violations</div>
                  <div className="mt-1 text-xs text-slate-400">
                    Rule breach events + status
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Reports</div>
                  <div className="mt-1 text-xs text-slate-400">
                    Charts + trends + exports
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow sm:p-10">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-500/20 bg-sky-500/15">
                  <Lock className="h-5 w-5 text-sky-200" />
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-100">
                    Login
                  </div>
                  <div className="text-xs text-slate-400">
                    Use demo credentials
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-xs text-slate-400">
                    Email
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <Input
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@traffic.ai"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs text-slate-400">
                    Password
                  </label>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Signing in...' : 'Sign in'}
                </Button>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-slate-400">
                  <div className="font-semibold text-slate-200">Demo</div>
                  <div className="mt-1">Email: admin@traffic.ai</div>
                  <div>Password: admin123</div>
                </div>

                <div className="text-center text-xs text-slate-500">
                  Later we will connect this to backend using{' '}
                  <code>services/api.js</code>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
