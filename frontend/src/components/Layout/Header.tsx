import { NavLink } from 'react-router'
import "./Header.css"

export default function Header() {
  return (
    <div className='navBar'>
      <NavLink to={"/addAlert"}>Add alert</NavLink>
      <NavLink to={"/alerts"}>Map</NavLink>
    </div>
  )
}
