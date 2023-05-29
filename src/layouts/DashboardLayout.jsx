import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/components/shared/Sidebar";

const DashboardLayout = () => {
    return (
        <main className="grid grid-cols-dashboard-md">
            <Sidebar/>
            <main className="md:absolute left-dashboard-md md:w-dashboard-body h-full bg-[#F3F3F3] ">
                <div className="max-w-[992px] mx-auto">
                    <Outlet/>
                </div>
            </main>
        </main>
    );
};

export default DashboardLayout;