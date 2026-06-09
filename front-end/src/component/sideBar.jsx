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
                    className="w-10 h-10 rounded-lg border-3 border-neo-border shadow-neo bg-neo-pink text-neo-border cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out shrink-0 hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover"

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
                    user={authedUser}
                    onLogOutHandler={onLogOutHandler}
                    isExpanded={isExpanded}
                />
            </div>
        </aside>
    );
}