import { useNavigate } from "react-router";
import useFetchGet from "../hooks/useFetchGet"
import "./MePage.css"

const url = "http://localhost:3001/api/auth/me";

type Data = {
    success: boolean,
    message: {
        username: string,
        _id: string,
        email: string,
        role: string,
        assignedArena: string
    }
}

export default function MePage() {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    if (!token) navigate("/auth/login");
    
    const {data, error, loading} = useFetchGet<Data>(url, {Authorization: `Bearer ${token}`})
    
	if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
	if (!data) return <>nodata</>;
    
    const user = data.message
    
    return (
        <div className="me-page">
            <h1>My Account</h1>
            <div>Username - {user.username}</div>
            <div>Email - {user.email}</div>
            <div className="lastRow">Role - {user.role}</div>
        </div>
    )
}
