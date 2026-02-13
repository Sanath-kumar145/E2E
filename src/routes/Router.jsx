import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import LiveMonitoring from '../pages/LiveMonitoring'
import SignalsControl from '../pages/SignalsControl'
import EventsViolations from '../pages/EventsViolations'
import ReportsAnalytics from '../pages/ReportsAnalytics'
import DashboardLayout from '../layouts/DashboardLayout'
import ProtectedRoute from './ProtectedRoute'


export default function Router() {
return (
<Routes>
<Route path="/" element={<Navigate to="/dashboard" replace />} />


<Route path="/login" element={<Login />} />


<Route
element={
<ProtectedRoute>
<DashboardLayout />
</ProtectedRoute>
}
>
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/live" element={<LiveMonitoring />} />
<Route path="/signals" element={<SignalsControl />} />
<Route path="/events" element={<EventsViolations />} />
<Route path="/reports" element={<ReportsAnalytics />} />
</Route>


<Route path="*" element={<Navigate to="/dashboard" replace />} />
</Routes>
)
}