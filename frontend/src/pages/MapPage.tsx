import { useEffect } from 'react'
import AlertsMap from '../components/AlertsMap/AlertsMap'
import useFetchGet from '../hooks/useFetchGet'
import type { Alert } from '../types/alertType'
import "./MapPage.css"
import { useNavigate } from 'react-router'
import type { User } from '../types/userType'

const url = "http://localhost:3001/api"

export default function MapPage() {
    const {executeGet, data, error, loading} = useFetchGet<[] | null>(`${url}/alerts`)

    const token = localStorage.getItem("token")

    const user = useFetchGet<User>(`${url}/auth/me`, {Authorization: `Bearer ${token}`}).data?.message
    
    const navigate = useNavigate()
    
    useEffect(executeGet)

    if (!user) return <>User unindentified!</>

    const role = user.role
    const arena = user.assignedArena

    if (loading) return <>Loading...</>
    if (error) return <>error</>
    if (!data) return <>No alerts!</>

    return (
        <div className='alertsPage'>
            {data && <AlertsMap alerts={data} className='map'/>}
            <div className='alertsHolder'>
                {
                data.map((i: Alert) => (
                    (["admin", "general_user"].includes(role) || arena === i.arena) &&
                    <div key={i._id} className='alertCard'>
                        <p>Name - {i.displayName}</p>
                        <p>Arena - {i.arena}</p> 
                        <p>Priority - {i.priority}</p>
                        <p>Status - {i.status}</p>
                        <button type='button' onClick={() => navigate(`/alerts/${i._id}`)} className='lastRow'>More</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
