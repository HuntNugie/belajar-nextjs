import MainLayout from "@/layout/Main.layout";
import { ReactElement } from "react";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <h1>Selamat Datang</h1>
                <p>
                    Ini adalah website profil sederhana menggunakan HTML dan CSS murni. Struktur dibuat terpisah agar
                    mudah dikembangkan ke tahap selanjutnya.
                </p>
            </div>
        </>
    );
};

HomePage.getLayout = (page:ReactElement)=>{
  return <MainLayout>{page}</MainLayout>
}

export default HomePage