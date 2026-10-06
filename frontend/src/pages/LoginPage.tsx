import { useRef } from "react";
import { useNavigate } from "react-router";
import useFetchPost from "../hooks/useFetchPost";
import "./LoginPage.css"

const url = "http://localhost:3001/api/auth/login";

export default function LoginPage() {
	const { execute, error, loading } = useFetchPost(url);

	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

    const handleClick = async () => {
        const body = {
            username: usernameRef.current?.value,
            password: passwordRef.current?.value
        }

        const res = await execute(body)

        if (res) {
            localStorage.setItem("token", res.message.token)
            navigate("/me")
        }
        return res
    }
	return (
		<div className="login-page">
			<h1>Login</h1>
            <input type="username" placeholder="username" ref={usernameRef}/>
            <input type="password" placeholder="password" ref={passwordRef}/>
            {error && <div style={{color: "red", margin: "10px 0"}}>{error}</div>}
            <button type="button" onClick={handleClick} className="lastRow">
                {loading ? "Sending..." : "Send"}
            </button>
		</div>
	);
}
