import React, { useEffect } from 'react';

function SectionGradiente() {
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel.children];

        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            // Records the initial cursor and scroll position of the carousel
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            // Clear existing timeout & start autoplay if mouse is not hovering over carousel
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
            // Autoplay the carousel after every 2500 ms
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
        autoPlay();

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        // Clean up event listeners on unmount
        return () => {
            arrowBtns.forEach(btn => {
                btn.removeEventListener("click", () => {
                    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
                });
            });
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("scroll", infiniteScroll);
            wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.removeEventListener("mouseleave", autoPlay);
        };
    }, []); // Empty dependency array to ensure the effect only runs once on mount

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

            <section className="carrossel">
                <div className="wrapper">
                    <i id="left" className="fa-solid fa-angle-left"></i>
                    <ul className="carousel">
                        <li className="card">
                            <div className="img"><img src='assets/tatuador-carrossel.jpg' alt="img" draggable="false" /></div>
                            <h2>King Tattoo</h2>
                            <span>Rua das Rosas, 123</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src='assets/tatuador-carrossel.jpg' alt="img" draggable="false" /></div>
                            <h2>King Tattoo</h2>
                            <span>Rua das Rosas, 123</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src='assets/tatuador-carrossel.jpg' alt="img" draggable="false" /></div>
                            <h2>King Tattoo</h2>
                            <span>Rua das Rosas, 123</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src='assets/tatuador-carrossel.jpg' alt="img" draggable="false" /></div>
                            <h2>King Tattoo</h2>
                            <span>Rua das Rosas, 123</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src='assets/tatuador-carrossel.jpg' alt="img" draggable="false" /></div>
                            <h2>King Tattoo</h2>
                            <span>Rua das Rosas, 123</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src='assets/tatuador-carrossel.jpg' alt="img" draggable="false" /></div>
                            <h2>King Tattoo</h2>
                            <span>Rua das Rosas, 123</span>
                        </li>
                    </ul>
                    <i id="right" className="fa-solid fa-angle-right"></i>
                </div>
            </section>

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

