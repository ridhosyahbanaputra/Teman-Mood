import React, { useState } from "react";
import { NavLink, } from "react-router-dom";
import { House, LayoutDashboard, ClipboardList, Info } from "lucide-react";


export default function Navigation({ isExpanded }) {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "nav-item active" : 'nav-item'}>
                        <House size={22} />  {
                            isExpanded && (
                                <span>Home</span>
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Dashboard'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <LayoutDashboard size={22} />{
                            isExpanded && (
                                <span>Dashboard</span>
                            )
                        }
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to={"/kuisoner"} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <ClipboardList size={22} />{
                            isExpanded && (
                                <span>Kuisoner</span>
                            )
                        }
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <Info size={22} />{
                            isExpanded && (
                                <span>About Us</span>
                            )
                        }
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}