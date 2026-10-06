import { useNavigate } from "react-router";
import useFetchDelete from "../hooks/useFetchDelete";
import useFetchGet from "../hooks/useFetchGet";

const url = "http://localhost:3001/api/auth/users";

type getUsersResponseType = {
	success: boolean;
	message: {
		_id: string;
		username: string;
		email: string;
		role: string;
		assignedArea: string;
	}[];
};

export default function AdminPage() {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const { executeGet, data, error, loading } = useFetchGet<getUsersResponseType>(url, {
		Authorization: `Bearer ${token}`,
	});
	const executeDelete = useFetchDelete(url).execute;

	if (!data) return <>No data!</>;

	const users = data.message;

	const deleteHandler = (id: string) => {
		executeDelete(id, { Authorization: `Bearer ${token}` });
        executeGet()

	};

	return (
		<div>
			<h1>AdminPage</h1>
			<button type="button" onClick={() => navigate("/auth/register")}>
				Add user
			</button>
			{users.map((user) => (
				<div key={user._id}>
					{user.username} - {user.email} - {user.role}
					<button type="button" onClick={() => deleteHandler(user._id)}>
						Delete user
					</button>
				</div>
			))}
		</div>
	);
}
