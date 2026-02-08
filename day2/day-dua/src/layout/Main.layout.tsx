import Navbar from "@/components/navbar";
import React from "react";

const MainLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <Navbar/>
            <div className="container">
                {children}
            </div>
        </>
    );
};



export default MainLayout;
