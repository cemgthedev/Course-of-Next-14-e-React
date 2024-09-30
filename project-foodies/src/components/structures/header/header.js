import Image from "next/image";
import logoImg from "../../../assets/logo.png";
import styles from "./header.module.css";
import NavLink from "./nav-link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div style={{display: "flex", alignItems: "center", gap: "0.8rem"}}>
                <Image priority src={logoImg} alt="logo" width={64} height={64}/>
                <h1 style={{color: "white", margin: 0}}>Foodies</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href={"/meals"}>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/community"}>Food Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}