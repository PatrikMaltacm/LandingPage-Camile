import imgLogo from "../../assets/logo.png"
import styles from "./header.module.css"
import { Link } from "react-scroll";


function Header (){
    return(
        <header className={styles.header}>
            <img src={imgLogo} alt="" className={styles.img}/>
            <nav className={styles.nav}>
                <Link to="home" smooth={true} duration={500} className={styles.a}>HOME</Link>
                <Link to="about" smooth={true} duration={500} className={styles.a}>SOBRE</Link>
                <Link to="specialties" smooth={true} duration={500} className={styles.a}>ESPECIALIDADES</Link>
                <Link to="time" smooth={true} duration={500} className={styles.a}>TIME</Link>
            </nav>
        </header>
    )
}

export default Header