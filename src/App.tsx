import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { UserProvider } from "./utils/userContext";

function App() {
    return (
        <>
        <UserProvider>
            <BrowserRouter>
                <div className="flex h-full min-h-screen">
                    <Sidebar />
                    <div className="flex-1 p-4 flex-col flex h-full min-h-screen">
                        <Navbar />
                        <AppRoutes />
                    </div>
                </div>
            </BrowserRouter>
        </UserProvider>
        </>
    );
}

export default App;
