import { useState } from "react";

export default function useFetchPost(url: string) {
    const [data, setData] = useState(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const execute = async (body: object,  headers?: Record<string, string>) => {
        const fetchParams = {
            method: "post",
            headers: {"Content-Type": "application/json", ...headers},
            body: JSON.stringify(body)
        }

        setError(null)
        setLoading(true)
        
        try {
            const res = await fetch(url, fetchParams)
            const result = await res.json()

            if (result.success === false) {
                throw new Error(result.message)
            }

            setData(result)
            return result
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError("Unknown error!")
            }
        } finally {
            setLoading(false)
        }
    }
    return {execute, data, error, loading}
}