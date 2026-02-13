import { useLocation } from 'react-router-dom'
import { Bell, Menu, Search, UserCircle2 } from 'lucide-react'
import Input from './ui/Input'

const pageTitle = (pathname) => {
  if (pathname.startsWith('/dashboard')) return 'Dashboard'
  if (pathname.startsWith('/live')) return 'Live Monitoring'
  if (pathname.startsWith('/signals')) return 'Signals Control'
  if (pathname.startsWith('/events')) return 'Events & Violations'
  if (pathname.startsWith('/reports')) return 'Reports / Analytics'
  return 'Smart Traffic'
}

export default function Topbar({ onMenu }) {
  const { pathname } = useLocation()

  return (
    <header className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-glow">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div>
              <div className="text-sm text-slate-400">Smart Traffic • AI</div>
              <div className="text-lg font-semibold text-slate-100">
                {pageTitle(pathname)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">
              <UserCircle2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden w-[340px] max-w-full sm:block">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <Input className="pl-10" placeholder="Search cameras, events..." />
          </div>

          <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 sm:inline-flex">
            <Bell className="h-5 w-5" />
          </button>
          <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 sm:inline-flex">
            <UserCircle2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
