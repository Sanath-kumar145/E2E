export const formatNumber = (n) => {
if (n === null || n === undefined) return '-'
try {
return new Intl.NumberFormat().format(n)
} catch {
return String(n)
}
}


export const cap = (s) => {
if (!s) return ''
return String(s).charAt(0).toUpperCase() + String(s).slice(1)
}