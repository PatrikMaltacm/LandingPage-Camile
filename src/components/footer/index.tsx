
import styles from "./footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.p}>Camile Folleto Advocacia - 2025. Todos os direitos reservados</p>
            <a className={styles.a} target="blank" href="https://www.instagram.com/camilefolettoadvocacia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="Icone Instagram" />
            </a>
        </footer>
    )
}

export default Footer