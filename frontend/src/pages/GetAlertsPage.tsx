import AlertsMap from '../components/AlertsMap/AlertsMap'
import useFetchGet from '../hooks/useFetchGet'
import type { Alert } from '../types/alertType'
import "./GetAlertsPage.css"

const url = "http://localhost:3001/api/alerts"

export default function GetAlertsPage() {
    const {data, error, loading} = useFetchGet<[] | null>(url)
    
    if (loading) <>Loading...</>
    if (error) <>error</>
    if (!data) <>No alerts!</>

    return (
        <div className='alertsPage'>
            {data && <AlertsMap alerts={data} className='map'/>}
            <ul className='alertsHolder'>
                {data?.map((i: Alert) => (
                    <div key={i._id} className='alertCard'>
                        <p>Display name -{i.displayName}</p>
                        <p>Description - {i.description}</p> 
                        <p>Arena - {i.arena}</p> 
                        <p>Priority - {i.priority}</p>
                        <p>Status - {i.status}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}
