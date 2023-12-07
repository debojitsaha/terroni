// Sidebar.tsx

import "./Sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Activity, Grid, Calendar, Award } from "react-feather";

const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col w-64 h-screen min-h-fit py-4">
            {/* Logo */}
            <div className="h-20 flex items-center justify-center">
                <img src="/terroni.png" alt="Logo" className="h-8 w-8" />
                <h1 className="font-extrabold text-2xl">Terroni</h1>
            </div>

            {/* Sidebar Items */}
            <NavLink to="/" className="nav-link">
                <SidebarItem icon={<Activity />} label="Content Portal" />
            </NavLink>

            <NavLink to="/pitch-manager" className="nav-link">
                <SidebarItem icon={<Grid />} label="Pitch Manager" />
            </NavLink>

            <NavLink to="/tag-manager" className="nav-link">
                <SidebarItem icon={<Calendar />} label="Tag Manager" />
            </NavLink>

            <NavLink to="/about" className="nav-link">
                <SidebarItem icon={<Award />} label="About" />
            </NavLink>
        </div>
    );
};

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
    return (
        <div className="flex items-center font-medium py-4 px-10 transition duration-100 sidebar-item">
            <div className="mr-2">{icon}</div>
            <div>{label}</div>
            <div className="indicator"></div>
        </div>
    );
};

export default Sidebar;
