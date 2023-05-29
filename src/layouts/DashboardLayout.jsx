import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/components/shared/Sidebar";

const DashboardLayout = () => {
    return (
        <main className="grid grid-cols-dashboard-md">
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </main>
    );
};

export default DashboardLayout;