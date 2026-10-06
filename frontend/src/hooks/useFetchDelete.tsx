import { useState } from "react";

export default function useFetchDelete(url: string) {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const execute = async (id: string, headers?: Record<string, string>) => {
        const fetchParams = {
            method: "delete",
            headers: headers
        }

        setError(null)
        setLoading(true)

        try {
            const currentUrl = `${url}/${id}`
            const res = await fetch(currentUrl, fetchParams)
            if (!res.ok) console.log(res.ok)
            return
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
    return {execute, error, loading}
}