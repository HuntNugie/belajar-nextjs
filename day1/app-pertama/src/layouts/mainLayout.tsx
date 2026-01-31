import Navbar from "@/components/navbar";
import React from "react";

type Typeprops = {
    children: React.ReactNode;
};

const MainLayout = (props: Typeprops) => {
    const {children} = props;
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
export default MainLayout;
