import AuthLayout from "@/layout/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const LoginPage = () => {
    const {push} = useRouter();
    const handleLogin = ()=>{
        push("/admin/dashboard")
    }
    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" required={true} />
                <input type="password" placeholder="Password" required={true} />
                <button type="submit" onClick={handleLogin}>Masuk</button>
            </form>
            <p>Belum punya akun? Register <Link href="/auth/register" style={{color:"blue"}}>di sini</Link>.</p>
        </>
    );
};

LoginPage.getLayout = (page:ReactElement)=>{
    return <AuthLayout>{page}</AuthLayout>
}

export default LoginPage