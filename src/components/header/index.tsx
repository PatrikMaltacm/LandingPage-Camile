import imgLogo from "../../assets/logo.png"
import "./header.module.css"
import { Link } from "react-scroll";


function Header (){
    return(
        <header>
            <img src={imgLogo} alt="" className="img"/>
            <nav>
                <Link to="home" smooth={true} duration={500}>HOME</Link>
                <Link to="about" smooth={true} duration={500}>SOBRE</Link>
                <Link to="specialties" smooth={true} duration={500}>ESPECIALIDADES</Link>
                <Link to="time" smooth={true} duration={500}>TIME</Link>
            </nav>
        </header>
    )
}

export default Header