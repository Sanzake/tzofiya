import { NavLink, useNavigate } from 'react-router'
import "./Header.css"
import useFetchGet from '../../hooks/useFetchGet'
import type { User } from '../../types/userType';

const url = "http://localhost:3001/api/auth/me";

export default function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const { data } = useFetchGet<User>(url, {Authorization: `Bearer ${token}`})
  const username = data ? data.message.username : "guest"
  const role = data ? data.message.role : "guest"

  const handleLogout = () => {
    localStorage.setItem("token", "")
    window.location.reload()
    navigate("/auth/login")
  }

  return (
      <div className='navBar'>
        <h2>Tzofia</h2>
        <h3>Hello {username} ({role})</h3>
        <NavLink to={"/addAlert"}>Add alert</NavLink>
        <NavLink to={"/alerts"}>Map</NavLink>
        {role === "admin" && <NavLink to={"/admin/users"}>Admin page</NavLink>}
        {data && <button type='button' onClick={handleLogout}>LogOut</button>}
      </div>
  )
}
