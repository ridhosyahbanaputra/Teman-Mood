import React from "react";
import { Link } from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/Dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link to={"/kuisoner"}>Isi Kuisoner</Link>
                </li>
            </ul>
        </nav>
    );
}