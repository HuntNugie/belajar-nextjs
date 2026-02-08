import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/auth/login">Login</Link>
            </nav>
        </>
    );
}
