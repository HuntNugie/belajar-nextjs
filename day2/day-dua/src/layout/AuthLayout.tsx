import Navbar from "@/components/navbar";
import React from "react";
const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
        <Navbar/>
            <div className="login-container">
            {children}
            </div>
        </>
    );
};

export default AuthLayout