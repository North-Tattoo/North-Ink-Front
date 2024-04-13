import React, { useEffect, useRef } from 'react';
import styles from '../../pages/detalhes/Detalhes.module.css';

function Carrossel2() {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const firstCardRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCard = firstCardRef.current;
    const arrowBtns = wrapper.querySelectorAll("i");

    let timeoutId;

    const autoPlay = () => {
      // Desloca a imagem para a direita
      carousel.scrollLeft += firstCard.offsetWidth;
      // Configura o próximo movimento
      timeoutId = setTimeout(autoPlay, 2500);
    };

    autoPlay();

    // Pára a reprodução automática quando o mouse entra no carrossel
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    // Resumo da reprodução automática quando o mouse sai do carrossel
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      // Remove os ouvintes de eventos quando o componente é desmontado
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, []);

  return (
    <section className={styles["carrossel"]}>
      <div className={styles["wrapper"]} ref={wrapperRef}>
        <ul className={styles["carousel"]} ref={carouselRef}>
          {/* Repita apenas uma imagem */}
          <li className={styles["card"]} ref={firstCardRef}>
            <div className={styles["img"]}><img src="\src\utils\assets\tatuador-carrossel.jpg" alt="img" draggable="false"/></div>
            <h2 className="text-zinc-700 font-bold">King Tattoo</h2>
            <span className="text-zinc-600 font-semibold">Rua das Rosas, 123</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Carrossel2;
