function Footer() {
    return (
        <footer className="footer">
            <nav className="links">
                <a href="#">Sobre Nós</a>
                <a href="#">Contato</a>
                <a href="#">FAQ</a>
                <a href="#">Políticas e Privacidade</a>
            </nav>
            <div className="barra-roxa"></div>
            <img id="google-play" src="assets/google-play-badge.png" alt="Google Play" />
            <LogoImagem />
            <div className="mensagem-direitos">© 2024 North Ink. Todos os direitos reservados.</div>
        </footer>
    );
}

function LogoImagem() {
    return (
      <img id='logo' src="assets/logo-branca.png" alt="" />
    )
  }

  
export default Footer;