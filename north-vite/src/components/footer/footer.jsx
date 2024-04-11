import styles from '../../pages/home/Home.module.css';

function Footer() {
    return (
        <footer className={styles["footer"]}>
            <nav className={styles["links"]}>
                <a href="#">Sobre Nós</a>
                <a href="#">Contato</a>
                <a href="#">FAQ</a>
                <a href="#">Políticas e Privacidade</a>
            </nav>
            <div className={styles["barra-roxa"]}></div>
            <img className={styles["google-play"]} src="\src\utils\assets\google-play-badge.png" alt="Google Play" />
            <LogoImagem />
            <div className={styles["mensagem-direitos"]}>© 2024 North Ink. Todos os direitos reservados.</div>
        </footer>
    );
}

function LogoImagem() {
    return (
      <img className={styles["logo-footer"]} src="src\utils\assets\logo-branca.png" alt="" />
    )
  }

  
export default Footer;