import React, { useEffect, useRef } from 'react';
import styles from '../../pages/home/Home.module.css';

function Carrossel() {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const firstCardRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCard = firstCardRef.current;
    const arrowBtns = wrapper.querySelectorAll("i");

    let isDragging = false;
    let startX, startScrollLeft;
    let timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCard.offsetWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    const lastCards = [...carousel.children].slice(-cardPerView).reverse();
    lastCards.forEach(card => carousel.insertAdjacentElement("afterbegin", card.cloneNode(true)));

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    const firstCards = [...carousel.children].slice(0, cardPerView);
    firstCards.forEach(card => carousel.insertAdjacentElement("beforeend", card.cloneNode(true)));

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCard.offsetWidth : firstCard.offsetWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
      if (window.innerWidth < 800) return;
      timeoutId = setTimeout(() => carousel.scrollLeft += firstCard.offsetWidth, 2500);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, []);

  return (
    <section className={styles["carrossel"]}>
      <div className={styles["wrapper"]} ref={wrapperRef}>
        <i id="left" className={styles["fa-solid fa-angle-left"]}></i>
        <ul className={styles["carousel"]} ref={carouselRef}>
          <li className={styles["card"]} ref={firstCardRef}>
            <div className={styles["img"]}><img src="\src\utils\assets\tatuador-carrossel.jpg" alt="img" draggable="false" /></div>
            <h2>King Tattoo</h2>
            <span>Rua das Rosas, 123</span>
          </li>
          <li className={styles["card"]}>
            <div className={styles["img"]}><img src="\src\utils\assets\tatuador-carrossel.jpg" alt="img" draggable="false" /></div>
            <h2>King Tattoo</h2>
            <span>Rua das Rosas, 123</span>
          </li>
          <li className={styles["card"]}>
            <div className={styles["img"]}><img src="\src\utils\assets\tatuador-carrossel.jpg" alt="img" draggable="false" /></div>
            <h2>King Tattoo</h2>
            <span>Rua das Rosas, 123</span>
          </li>
          <li className={styles["card"]}>
            <div className={styles["img"]}><img src="\src\utils\assets\tatuador-carrossel.jpg" alt="img" draggable="false" /></div>
            <h2>King Tattoo</h2>
            <span>Rua das Rosas, 123</span>
          </li>
          <li className={styles["card"]}>
            <div className={styles["img"]}><img src="\src\utils\assets\tatuador-carrossel.jpg" alt="img" draggable="false" /></div>
            <h2>King Tattoo</h2>
            <span>Rua das Rosas, 123</span>
          </li>
          <li className={styles["card"]}>
            <div className={styles["img"]}><img src="\src\utils\assets\tatuador-carrossel.jpg" alt="img" draggable="false" /></div>
            <h2>King Tattoo</h2>
            <span>Rua das Rosas, 123</span>
          </li>
        </ul>
        <i id="right" className={styles["fa-solid fa-angle-right"]}></i>
      </div>
    </section>
  );
}

export default Carrossel;
