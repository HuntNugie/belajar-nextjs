import AuthLayout from "@/layout/AuthLayout";
import Link from "next/link";
import { ReactElement } from "react";

const RegisterPage = () => {
    return (
        <>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" required={true} />
                <input type="password" placeholder="Password" required={true} />
                <input type="password" placeholder="konfirmasi password" required={true} />
                <button type="submit">Daftar</button>
            </form>
            <p>
                sudah punya akun? Login{" "}
                <Link href="/auth/login" style={{color: "blue"}}>
                    di sini
                </Link>
                .
            </p>
        </>
    );
};

RegisterPage.getLayout = (page:ReactElement)=>{
    return <AuthLayout>{page}</AuthLayout>
}

export default RegisterPage