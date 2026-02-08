import MainLayout from "@/layout/Main.layout";
import { ReactElement } from "react";

const AboutPage = () => {
    return (
        <>
            <h1>About Me</h1>
            <p>
                Halo, saya adalah seorang pembelajar web development. Saat ini saya fokus memahami fondasi HTML, CSS,
                dan logika pemrograman sebelum naik ke framework.
            </p>
        </>
    );
};

AboutPage.getLayout  = (page:ReactElement)=>{
    return <MainLayout>{page}</MainLayout>
}

export default AboutPage
