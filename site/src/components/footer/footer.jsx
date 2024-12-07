import styles from '../../pages/home/Home.module.css';
function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["logo-direitos"]}>
                <LogoImagem />
                <div className={styles["mensagem-direitos"]}>© 2024 North Ink. Todos os direitos reservados.</div>
            </div>
            <div className={styles["links-barra"]}>
            <nav className={styles["links"]}>
                <a href="#">Sobre Nós</a>
                <a href="#">Contato</a>
                <a href="#">FAQ</a>
                <a href="#">Políticas e Privacidade</a>
            </nav>
            <div className={styles["barra-cinza"]}></div>
            </div>
        </footer>
    );
}

function LogoImagem() {
    return (
        <img className={styles["logo-footer"]} src="https://res-console.cloudinary.com/dpacgzko0/media_explorer_thumbnails/99e8c70a0e372a1bbf26566b75fde331/detailed" alt="" />
    )
}


export default Footer;