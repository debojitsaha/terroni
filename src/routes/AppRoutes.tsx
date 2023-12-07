import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { About } from "../pages/about";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default AppRoutes;
