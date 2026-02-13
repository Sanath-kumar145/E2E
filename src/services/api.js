// services/api.js
// Central place to connect your backend later.
// Replace BASE_URL with your Flask/FastAPI/Node backend.


const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'


async function request(path, options = {}) {
const token = localStorage.getItem('stm_token')


const res = await fetch(`${BASE_URL}${path}`, {
...options,
headers: {
'Content-Type': 'application/json',
...(token ? { Authorization: `Bearer ${token}` } : {}),
...(options.headers || {}),
},
})


const isJson = res.headers.get('content-type')?.includes('application/json')
const data = isJson ? await res.json() : await res.text()


if (!res.ok) {
const message = data?.message || 'API request failed'
throw new Error(message)
}


return data
}


export const api = {
login: (payload) => request('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),


getDashboard: () => request('/dashboard'),


getLiveCameras: () => request('/cameras/live'),


getSignals: () => request('/signals'),
updateSignal: (id, payload) =>
request(`/signals/${id}`, { method: 'PATCH', body: JSON.stringify(payload) }),


getEvents: (params = '') => request(`/events${params}`),


getReports: () => request('/reports'),
}