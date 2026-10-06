import { useNavigate } from "react-router";
import useFetchDelete from "../../hooks/useFetchDelete";
import type { Alert } from "../../types/alertType";
import "./AlertCard.css"
import useFetchGet from "../../hooks/useFetchGet";
import type { User } from "../../types/userType";

const url = "http://localhost:3001/api"
const acceptedRoles = ["admin", "general_user"]

type AlertProps = {
    alert: Alert
}

export default function AlertCard({alert}: AlertProps) {
    const navigate = useNavigate()
	const { execute } = useFetchDelete(`${url}/alerts`);
	const token = localStorage.getItem("token")
	const {data} = useFetchGet<User>(`${url}/auth/me`, {Authorization: `Bearer ${token}`})
	
	if (!data) return <>Unidentified role</>
	const role = data.message.role
	const arena = data.message.assignedArena

	const handleDelete = (id: string) => {
		execute(id);
		navigate("/alerts");
	};
			
	return (
		<div className="bigAlertCard">
			<p>Name - {alert.displayName}</p>
			<p>Description - {alert.description}</p>
			<p>Arena - {alert.arena}</p>
			<p>Priority - {alert.priority}</p>
			<p>Status - {alert.status}</p>

			{(acceptedRoles.includes(role) || arena === "all"  || alert.arena === arena) &&
				<div>
					<button type="button" onClick={() => handleDelete(alert._id)}>
						Delete
					</button>
					<button type="button" onClick={() => navigate(`/updateAlert/${alert._id}`)} className="lastRow">
						Update
					</button>
				</div>
			}
		</div>
	);
}
