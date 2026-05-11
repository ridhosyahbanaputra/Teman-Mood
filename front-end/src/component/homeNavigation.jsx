import { Link } from "react-router-dom";
import React from "react";

export default function HomeNavigation() {
    return (
        <ul>
            <li>
                <Link to={"/login"}>Log in</Link>
            </li>
            <li>
                <Link to={"/register"}>Register</Link>
            </li>
        </ul>
    );
}