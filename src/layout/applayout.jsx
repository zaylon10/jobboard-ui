import { Outlet } from "react-router-dom";
import '../App.css'; // ✅ Proper CSS import
import Header from "../components/Header";
const AppLayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <main className="min-h-screen container">
                <Header/>
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">Made with love by Zay</div>
        </div>
    );
};

export default AppLayout;
