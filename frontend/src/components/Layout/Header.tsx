import { NavLink } from 'react-router'
import "./Header.css"

export default function Header() {
  return (
      <div className='navBar'>
        <h2>Tzofia</h2>
        <NavLink to={"/addAlert"}>Add alert</NavLink>
        <NavLink to={"/alerts"}>Map</NavLink>
      </div>
  )
}
