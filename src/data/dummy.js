export const dashboardStats = {
  totalVehiclesToday: 48726,
  avgSpeed: 38.6,
  activeSignals: 18,
  violationsToday: 146,
}

export const trafficTrend = [
  { time: '06:00', vehicles: 320 },
  { time: '08:00', vehicles: 980 },
  { time: '10:00', vehicles: 720 },
  { time: '12:00', vehicles: 840 },
  { time: '14:00', vehicles: 610 },
  { time: '16:00', vehicles: 1100 },
  { time: '18:00', vehicles: 1420 },
  { time: '20:00', vehicles: 900 },
  { time: '22:00', vehicles: 420 },
]

export const violationSummary = [
  { type: 'Signal Jump', count: 34 },
  { type: 'No Helmet', count: 29 },
  { type: 'Overspeed', count: 52 },
  { type: 'Wrong Lane', count: 31 },
]

export const signalStatus = [
  { name: 'Green', value: 8 },
  { name: 'Yellow', value: 3 },
  { name: 'Red', value: 6 },
  { name: 'Offline', value: 1 },
]

export const liveCameras = [
  {
    id: 'CAM-ALV-01',
    location: 'Aluva Junction',
    status: 'online',
    streamUrl: '',
  },
  {
    id: 'CAM-KCH-07',
    location: 'Kochi Metro Station',
    status: 'online',
    streamUrl: '',
  },
  {
    id: 'CAM-MRN-03',
    location: 'Marine Drive',
    status: 'maintenance',
    streamUrl: '',
  },
  {
    id: 'CAM-EDP-11',
    location: 'Edappally Toll',
    status: 'offline',
    streamUrl: '',
  },
]

export const signals = [
  {
    id: 'SIG-01',
    junction: 'Aluva Junction',
    mode: 'AI',
    cycleSeconds: 90,
    lastUpdated: '2 min ago',
    status: 'optimal',
  },
  {
    id: 'SIG-02',
    junction: 'Edappally Toll',
    mode: 'Manual',
    cycleSeconds: 120,
    lastUpdated: '1 min ago',
    status: 'warning',
  },
  {
    id: 'SIG-03',
    junction: 'Kalamassery',
    mode: 'AI',
    cycleSeconds: 75,
    lastUpdated: '4 min ago',
    status: 'optimal',
  },
  {
    id: 'SIG-04',
    junction: 'Vyttila Hub',
    mode: 'AI',
    cycleSeconds: 105,
    lastUpdated: 'Just now',
    status: 'busy',
  },
]

export const eventsAndViolations = [
  {
    id: 'EVT-10021',
    type: 'Violation',
    category: 'Overspeed',
    severity: 'high',
    camera: 'CAM-KCH-07',
    location: 'Kochi Metro Station',
    time: '2026-01-25 09:14',
    plate: 'KL-07-AB-1421',
    status: 'open',
  },
  {
    id: 'EVT-10022',
    type: 'Event',
    category: 'Accident',
    severity: 'critical',
    camera: 'CAM-ALV-01',
    location: 'Aluva Junction',
    time: '2026-01-25 09:17',
    plate: '-',
    status: 'escalated',
  },
  {
    id: 'EVT-10023',
    type: 'Violation',
    category: 'Signal Jump',
    severity: 'medium',
    camera: 'CAM-EDP-11',
    location: 'Edappally Toll',
    time: '2026-01-25 09:24',
    plate: 'KL-01-CX-9087',
    status: 'open',
  },
  {
    id: 'EVT-10024',
    type: 'Event',
    category: 'Congestion',
    severity: 'low',
    camera: 'CAM-MRN-03',
    location: 'Marine Drive',
    time: '2026-01-25 09:31',
    plate: '-',
    status: 'resolved',
  },
  {
    id: 'EVT-10025',
    type: 'Violation',
    category: 'No Helmet',
    severity: 'medium',
    camera: 'CAM-ALV-01',
    location: 'Aluva Junction',
    time: '2026-01-25 09:40',
    plate: 'KL-43-HG-3312',
    status: 'open',
  },
  {
    id: 'EVT-10026',
    type: 'Violation',
    category: 'Wrong Lane',
    severity: 'low',
    camera: 'CAM-KCH-07',
    location: 'Kochi Metro Station',
    time: '2026-01-25 09:49',
    plate: 'KL-08-ZZ-4110',
    status: 'resolved',
  },
]

export const reports = {
  weeklyTraffic: [
    { day: 'Mon', vehicles: 6200 },
    { day: 'Tue', vehicles: 7100 },
    { day: 'Wed', vehicles: 6800 },
    { day: 'Thu', vehicles: 7400 },
    { day: 'Fri', vehicles: 8200 },
    { day: 'Sat', vehicles: 5600 },
    { day: 'Sun', vehicles: 4900 },
  ],
  weeklyViolations: [
    { day: 'Mon', count: 18 },
    { day: 'Tue', count: 24 },
    { day: 'Wed', count: 16 },
    { day: 'Thu', count: 27 },
    { day: 'Fri', count: 34 },
    { day: 'Sat', count: 13 },
    { day: 'Sun', count: 9 },
  ],
}