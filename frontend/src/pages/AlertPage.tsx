
import { useParams } from "react-router";
import AlertCard from "../components/AlertCard/AlertCard";
import useFetchGet from "../hooks/useFetchGet";
import type { Alert } from "../types/alertType";

const url = "http://localhost:3001/api/alerts"

export default function AlertPage() {
	const {id} = useParams();
    
    const {data, error, loading} = useFetchGet<Alert>(`${url}/${id}`)
    
    if (!data) return <>No data</>
    if (error) return <>error</>
    if (loading) return <>Loading...</>
    console.log(data)

	return (
    <div>
        {data && <AlertCard alert={data}/>}
    </div>
  )
}
