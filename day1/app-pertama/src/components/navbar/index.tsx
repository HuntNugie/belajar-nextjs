export default function Navbar() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#1f2937",
                    padding: "15px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* LOGO */}
                <div style={{color: "white", fontSize: 20, fontWeight: "bold"}}>MyApp</div>
                {/* MENU */}
                <div>
                    <a href="#" style={{color: "white", textDecoration: "none", marginRight: 20}}>
                        Home
                    </a>
                    <a href="#" style={{color: "white", textDecoration: "none", marginRight: 20}}>
                        About
                    </a>
                    <a href="#" style={{color: "white", textDecoration: "none", marginRight: 20}}>
                        Services
                    </a>
                    <a
                        href="#"
                        style={{
                            color: "white",
                            textDecoration: "none",
                            padding: "8px 16px",
                            backgroundColor: "#2563eb",
                            borderRadius: 5,
                        }}
                    >
                        Login
                    </a>
                </div>
            </div>
        </>
    );
}
