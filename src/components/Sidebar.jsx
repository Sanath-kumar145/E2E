import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Video,
  TrafficCone,
  ShieldAlert,
  BarChart3,
  LogOut,
  X,
} from 'lucide-react'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/live', label: 'Live Monitoring', icon: Video },
  { to: '/signals', label: 'Signals Control', icon: TrafficCone },
  { to: '/events', label: 'Events & Violations', icon: ShieldAlert },
  { to: '/reports', label: 'Reports / Analytics', icon: BarChart3 },
]

function NavItem({ to, icon: Icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition',
          isActive
            ? 'bg-white/10 text-slate-100 border border-white/10'
            : 'text-slate-300 hover:bg-white/5',
        ].join(' ')
      }
    >
      <Icon className="h-5 w-5" />
      <span className="truncate">{label}</span>
    </NavLink>
  )
}

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('stm_token')
    navigate('/login')
  }

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-72 shrink-0 lg:block">
        <div className="sticky top-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-500/15 border border-sky-500/20">
                <span className="text-sm font-bold text-sky-200">STM</span>
              </div>

              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-slate-100">
                  Smart Traffic
                </div>
                <div className="truncate text-xs text-slate-400">
                  AI Management System
                </div>
              </div>
            </div>
          </div>

          <nav className="mt-4 flex flex-col gap-2">
            {nav.map((n) => (
              <NavItem key={n.to} {...n} />
            ))}
          </nav>

          <div className="mt-4 border-t border-white/10 pt-4">
            <button
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/5 transition"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        className={
          'fixed inset-0 z-50 lg:hidden ' +
          (open ? 'pointer-events-auto' : 'pointer-events-none')
        }
      >
        <div
          className={
            'absolute inset-0 bg-black/60 transition ' +
            (open ? 'opacity-100' : 'opacity-0')
          }
          onClick={onClose}
        />

        <div
          className={
            'absolute left-0 top-0 h-full w-[86%] max-w-xs border-r border-white/10 bg-[#0A1020] p-4 shadow-glow transition-transform ' +
            (open ? 'translate-x-0' : '-translate-x-full')
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-500/15 border border-sky-500/20">
                <span className="text-sm font-bold text-sky-200">STM</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-100">
                  Smart Traffic
                </div>
                <div className="text-xs text-slate-400">AI Dashboard</div>
              </div>
            </div>

            <button
              className="rounded-xl p-2 hover:bg-white/5"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-4 flex flex-col gap-2">
            {nav.map((n) => (
              <NavItem key={n.to} {...n} onClick={onClose} />
            ))}
          </nav>

          <div className="mt-4 border-t border-white/10 pt-4">
            <button
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/5 transition"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}