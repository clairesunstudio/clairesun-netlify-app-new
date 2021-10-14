import { useEffect, useState } from 'react'

export default function useMedia(queries, values, defaultValue) {
  const match = () => {
    if (typeof window !== `undefined`) {
      return values[queries.findIndex(q => window.matchMedia(q).matches)] || defaultValue
    }
  }
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return value
}
