import MainLayout from "@/layout/Main.layout";
import { ReactElement } from "react";

const ContactPage = () => {
    return (
        <>
            <>
                <h1>Contact</h1>
                <form>
                    <input type="text" placeholder="Nama" />
                    <input type="email" placeholder="Email" />
                    <textarea rows={5} placeholder="Pesan" defaultValue={""} />
                    <button type="submit">Kirim</button>
                </form>
            </>
        </>
    );
};

ContactPage.getLayout = (page:ReactElement)=>{
    return <MainLayout>{page}</MainLayout>
}

export default ContactPage