import Sidebar from "@/components/sidebar";

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <div className="dashboard">
                {/* SIDEBAR */}
               <Sidebar/>
                {/* MAIN */}
                <main className="dashboard-main">
                    {children}
                </main>
            </div>
        </>
    );
};
export default AdminLayout