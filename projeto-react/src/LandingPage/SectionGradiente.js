import React from 'react';
import Carrossel from '../ListagemTatuadores/ListagemCarrossel'

function SectionGradiente() {
    return (
        <section className="gradiente-site">
            <section className="fotos-tatuagens">
                <div className="frase-tatuagens">
                    Nós celebramos a <span style={{ color: '#581C87' }}>arte</span> que <br /> você veste. <br />
                    <span style={{ color: '#581C87' }}>Descubra</span> a tatuagem que eleva sua essência.
                </div>
                <div className="row">
                    <div className="column">
                        <img src='assets/imagens-comprimidas/um-homem-com-uma-tatuagem-no-braco-comprimido.jpg' alt="Tatuador com tatuagem no braço" />
                        <img src='assets/imagens-comprimidas/antebraco-colorida-comprimida.jpg' alt="Antebraço colorida" />
                        <img src='assets/imagens-comprimidas/tatuagem-mulher-costas-comprimida.jpg' alt="Tatuagem mulher costas" />
                    </div>
                    <div className="column">
                        <img src='assets/imagens-comprimidas/tattoo-oriental-comprimida.jpg' alt="Tattoo oriental" />
                        <img src='assets/imagens-comprimidas/tattoo-horizontal-comprimida.jpg' alt="Tattoo horizontal" />
                    </div>
                    <div className="column">
                        <img src='assets/imagens-comprimidas/tattoo-antebraco-comprimida.jpg' alt="Tattoo antebraço" />
                        <img src='assets/imagens-comprimidas/pescoço-comprimido.jpg' alt="Pescoço" />
                        <img src='assets/imagens-comprimidas/ombro-comprimido.jpg' alt="Ombro" />
                    </div>
                </div>
            </section>

            <article className="frase-carrossel">Descubra os <span style={{ color: '#34035a' }}>artistas</span> que não apenas ouvem,
                <br />
                mas entendem sua <span style={{ color: '#34035a' }}>história</span>.
            </article>

            <Carrossel />

            <section className="secao-depoimentos">
                <header>Na <span style={{ color: '#9333EA' }}>North Ink.</span>, sua melhor escolha! <br />
                    Profissionais, preço e proximidade em um só lugar.
                </header>
                <article>Depoimento de um dos nossos <span style={{ color: '#9333EA' }}>parceiros.</span></article>
                <div className="depoimento-tatuador">
                    <img style={{ width: '504px', height: '468px' }} src='assets/foto-tatuador-depoimento.jpg' alt="Depoimento do tatuador" />
                    <div className="texto-depoimento">
                        <header>Roberto Otávio de Paula, 45 anos</header>
                        <article>Proprietário do <span style={{ color: '#9333EA' }}>Tattoo House</span> - Santa Cecilia</article>
                        <span>
                            "Desde que me juntei à North Ink, minha carreira decolou! Esta plataforma revolucionária não
                            apenas
                            me conectou a uma ampla base de clientes ávidos por minha arte, mas também simplificou todo o
                            processo. Com a North Ink, tenho a liberdade de me concentrar no que faço de melhor - criar
                            tatuagens memoráveis - enquanto a plataforma me me aproxima de maneira eficaz do público. É como
                            ter
                            um assistente pessoal 24 horas por dia, 7 dias por semana, direcionando clientes de qualidade
                            até
                            minha porta. Estou verdadeiramente grato por fazer parte desta comunidade vibrante e por todo o
                            apoio que recebi da equipe da North Ink. Juntos, estamos transformando sonhos em tinta!"
                        </span>
                    </div>
                </div>
            </section>

            <div className="logo-final-do-site">
                <img src='assets/logo-sem-nome.png' alt="Logo final do site" />
            </div>
        </section>
    );
}

export default SectionGradiente;