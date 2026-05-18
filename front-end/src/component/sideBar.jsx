import React, { useState } from "react";
import Navigation from "./navigation";
import InfoUser from "./infoUser";
import { Menu } from "lucide-react";
import "../style/sidebar.css"

export default function SideBar({ authedUser, onLogOutHandler }) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <aside className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
            <div className="sidebar-header">

                <button
                    className="toggle-btn"

                    onClick={() => setIsExpanded(!isExpanded)}>
                    <Menu size={22} />
                </button>{
                    isExpanded && (
                        <h2 className="logo-text">
                            TemanMood
                        </h2>
                    )
                }
            </div>
            <Navigation isExpanded={isExpanded} />
            <div className="sidebar-footer">
                <InfoUser
                    name={authedUser.name}
                    onLogOutHandler={onLogOutHandler}
                    isExpanded={isExpanded}
                />
            </div>
        </aside>
    );
}