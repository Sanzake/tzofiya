import { useNavigate } from "react-router";
import useFetchDelete from "../../hooks/useFetchDelete";
import type { Alert } from "../../types/alertType";
import "./AlertCard.css"

const url = "http://localhost:3001/api/alerts"

type AlertProps = {
    alert: Alert
}

export default function AlertCard({alert}: AlertProps) {
    const navigate = useNavigate()
	const { execute } = useFetchDelete(url);

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

			<button type="button" onClick={() => handleDelete(alert._id)}>
				Delete
			</button>
			<button type="button" onClick={() => navigate(`/updateAlert/${alert._id}`)} className="lastRow">
				Update
			</button>
		</div>
	);
}
