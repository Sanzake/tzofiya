import { useNavigate } from "react-router";
import useFetchGet from "../hooks/useFetchGet.tsx";
import useFetchPost from "../hooks/useFetchPost.tsx";
import type { User } from "../types/userType.tsx";

const url = "http://localhost:3001";

export default function RegisterPage() {
	const { execute, data, error, loading } = useFetchPost(`${url}/api/auth/register`);

	const navigate = useNavigate();

	const token = localStorage.getItem("token");
	if (!token) navigate("/auth/login");

	const meGetResponse = useFetchGet<User>(`${url}/api/auth/me`, {Authorization: `Bearer ${token}`});
    if (!meGetResponse.data) return <>No data!</>
    
    const role = meGetResponse.data.message.role
    if (role !== "admin") {
        console.log("Permission denied!");
        navigate("/auth/login")
    }
    
	const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const body = {
            username: formData.get("username"),
            password: formData.get("password"),
            email: formData.get("email"),
            role: formData.get("role"),
            assignedArena: formData.get("assignedArena")
        }
        
        execute(body, {Authorization: `Bearer ${token}`})
    };

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="username"
					name="username"
					required
				/>
				<input
					type="text"
					placeholder="password"
					name="password"
					required
				/>
				<input
					type="text"
					placeholder="email"
					name="email"
					required
				/>

				<label htmlFor="role">Role</label>
				<select name="role" id="role" required>
					<option value="arena_user">Arena user</option>
					<option value="general_user">General user</option>
					<option value="admin">Admin</option>
				</select>

				<label htmlFor="assignedArena">Assigned arena</label>
				<select name="assignedArena" id="assignedArena" required>
					<option value="Central">Central</option>
					<option value="North">North</option>
					<option value="South">South</option>
					<option value="all">All</option>
				</select>

				{error && <div style={{ color: "red", margin: "10px 0" }}>{error}</div>}

				<button type="submit">
					{loading ? "Sending..." : "Send"}
				</button>
			</form>
			{data && <div>Successfull signed up!</div>}
		</div>
	);
}
