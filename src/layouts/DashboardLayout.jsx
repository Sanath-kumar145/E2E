import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'


export default function DashboardLayout() {
const [sidebarOpen, setSidebarOpen] = useState(false)


return (
<div className="min-h-screen">
<div className="mx-auto max-w-[1600px] px-3 sm:px-4 lg:px-6">
<div className="flex gap-4 py-4">
<Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />


<div className="flex min-w-0 flex-1 flex-col">
<Topbar onMenu={() => setSidebarOpen(true)} />


<main className="mt-4 min-w-0 flex-1">
<Outlet />
</main>


<footer className="mt-6 pb-6 text-xs text-slate-400">
<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
<span>© {new Date().getFullYear()} Smart Traffic Management System</span>
<span className="opacity-80">Demo UI • Dummy data</span>
</div>
</footer>
</div>
</div>
</div>
</div>
)
}