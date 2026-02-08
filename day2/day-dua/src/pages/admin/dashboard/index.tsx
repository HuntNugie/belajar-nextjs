import AdminLayout from "@/layout/AdminLayout";
import { ReactElement } from "react";

const DashboardPage = () => {
    return (
        <>
            <div className="dashboard-header">
                <h1>Welcome Back</h1>
                <p>Ini adalah halaman dashboard dengan layout berbeda.</p>
            </div>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Users</h3>
                    <p>120</p>
                </div>
                <div className="dashboard-card">
                    <h3>Messages</h3>
                    <p>45</p>
                </div>
                <div className="dashboard-card">
                    <h3>Activity</h3>
                    <p>78%</p>
                </div>
            </div>
        </>
    );
};

DashboardPage.getLayout = (page:ReactElement)=>{
    return <AdminLayout>{page}</AdminLayout>
}


export default DashboardPage