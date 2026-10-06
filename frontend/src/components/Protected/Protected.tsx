import type React from "react";
import { Navigate} from "react-router";

interface ProtectedProps {
	children: React.ReactElement;
}

export default function Protected({ children }: ProtectedProps) {
	const token = localStorage.getItem("token")
    
    if (!token) return <Navigate to={"/auth/login"} />
    return children
}
