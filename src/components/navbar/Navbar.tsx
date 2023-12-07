// Navbar.tsx
import "./Navbar.css";
import React, { useState } from "react";
import { Moon, Sun, Search, ChevronDown } from "react-feather";
import { useUser } from "../../utils/userContext";
import { UserDropdown } from "../dropdown";

const Navbar: React.FC = () => {
    const { darkMode, toggleDarkMode, username } = useUser();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
      };

    return (
        <div className="h-14 flex items-center justify-between mt-2">
            <div className="flex-1 flex items-center justify-between bg-white rounded-lg shadow px-4 h-full">
                <div className="text-zinc-600 font-medium">
                    RevSpire Enablement
                </div>
                <div className="w-1/4 mx-4 bg-zinc-100 rounded-lg flex items-center justify-between p-2">
                    <input
                        type="text"
                        placeholder="Hinted search text"
                        className="outline-none border-none flex-1 px-2 bg-zinc-100 text-zinc-600 text-sm font-medium"
                    />
                    <Search className="text-gray-600" />
                </div>
            </div>

            <div className="w-16 flex items-center justify-center cursor-pointer transition duration-200">
                {darkMode ? (
                    <Moon className="w-6 h-6" onClick={toggleDarkMode} />
                ) : (
                    <Sun className="w-6 h-6" onClick={toggleDarkMode} />
                )}
            </div>

            <div className="w-72 flex items-center justify-between h-full">
                <div className="border rounded-lg w-full flex items-center justify-between px-4 h-full">
                    <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-full user-avatar"></div>
                        <div className="mx-4 text-black text-md">
                            {username}
                        </div>
                    </div>
                    <div className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer" onClick={toggleDropdown}>
                        <ChevronDown />
                    </div>
                </div>
                {isDropdownOpen && <UserDropdown />}
            </div>
        </div>
    );
};

export default Navbar;
