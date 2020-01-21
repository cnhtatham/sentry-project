import React from "react"
import { NavLink }  from "react-router-dom"
import { GiBrutalHelm, GiShuriken } from "react-icons/gi"
import "./Sidebar.css"

// Again ordering by hierarchy
const Sidebar = () => (
    <nav className="sidebar">
      <SidebarItem menuItem="Projects" icon={<GiBrutalHelm />} to="/projects" />
      <SidebarItem menuItem="Activities" icon={<GiShuriken />} to="/activities"/>
    </nav>
)



const SidebarItem = ( d ) => (
  <NavLink
    className="sidebar-item"
    id={d.menuItem.toLowerCase() + "-menu-item"}
    to={d.to}
    activeClassName="navbar-active" >
      <span className="sidebar-item-icon">{d.icon}</span>
      <span className="sidebar-item-text">{d.menuItem}</span>
  </NavLink>
)



export default Sidebar
