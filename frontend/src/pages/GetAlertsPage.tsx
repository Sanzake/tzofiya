import { useEffect } from 'react'
import AlertsMap from '../components/AlertsMap/AlertsMap'
import useFetchDelete from '../hooks/useFetchDelete'
import useFetchGet from '../hooks/useFetchGet'
import type { Alert } from '../types/alertType'
import "./GetAlertsPage.css"

const url = "http://localhost:3001/api/alerts"

export default function GetAlertsPage() {
    const {executeGet, data, error, loading} = useFetchGet<[] | null>(url)
    const {execute} = useFetchDelete(url)

    const handleDelete = (id: string) => {
        execute(id)
        executeGet()
    }

    useEffect(executeGet)

    if (loading) return <>Loading...</>
    if (error) return <>error</>
    if (!data) return <>No alerts!</>

    return (
        <div className='alertsPage'>
            {data && <AlertsMap alerts={data} className='map'/>}
            <ul className='alertsHolder'>
                {data?.map((i: Alert) => (
                    <div key={i._id} className='alertCard'>
                        <p>Display name - {i.displayName}</p>
                        <p>Description - {i.description}</p> 
                        <p>Arena - {i.arena}</p> 
                        <p>Priority - {i.priority}</p>
                        <p>Status - {i.status}</p>
                        <button type='button' onClick={() => handleDelete(i._id)}>delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
