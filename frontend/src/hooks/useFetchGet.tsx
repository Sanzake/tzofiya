import { useEffect, useState } from "react"

export default function useFetchGet<T>(url: string, headers?: Record<string, string>) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const headersKey = headers ? JSON.stringify(headers) : null

    useEffect(() => {
        if (!url) {
            setData(null)
            setError(null)
            setLoading(false)
            return
        }
        setError(null)
        setLoading(false)

        const parsedHeaders = headersKey ? JSON.parse(headersKey) : undefined
        const params = parsedHeaders ? { headers: parsedHeaders } : {};

        fetch(url, params)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error! respons.ok - ${res.ok}`)
            }
            return res.json()
        })
        .then(result => {
            setData(result)
        })
        .catch(error => setError(error))
        .finally(() => {
            setLoading(false)
        })
    }, [url, headersKey])
    return {data, error, loading}
}