import { FaRegUserCircle } from "react-icons/fa";

function SecaoInicio() {
    return (
        <>
            <section className="inicio">
                <div className="logo">
                    <LogoImagem />
                    {/* <img src='../public/assets/logo-branca.png' alt='bibcudn' /> */}
                </div>
                <div className="botao-entrar">
                    <FaRegUserCircle />
                    <a href="#">Entrar</a>
                </div>
                <header className="frase-titulo">
                    ENCONTRE O SEU <span style={{ color: '#9333EA' }}>TATUADOR</span> IDEAL.
                </header>
                <article className="subtitulo">
                    Na nossa plataforma, <span style={{ color: '#9333EA' }}>TATUADOR</span> conectamos você aos melhores tatuadores em
                    minutos, prontos para transformar suas
                    ideias em tinta. Explore estilos únicos e faça da sua próxima tatuagem uma <span style={{ color: '#9333EA' }}>TATUADOR</span> inesquecível.
                </article>
                <div className="botoes-inicio">
                    <button style={{ backgroundColor: '#9333EA' }}>SEJA UM PARCEIRO</button>
                    <button style={{ backgroundColor: '#5B5B5B' }}>BUSCAR PROFISSIONAIS</button>
                </div>
            </section>
        </>
    );
}

// Nossa logo componentizada:

function LogoImagem() {
    return (
        <img src="assets/logo-branca.png" alt="" />
    )
}

export default SecaoInicio;