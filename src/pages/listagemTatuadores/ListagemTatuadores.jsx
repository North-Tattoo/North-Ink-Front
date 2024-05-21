import React from 'react';
import logoBranca from '../../utils/assets/logo-branca.png';
import styles from './ListagemTatuadores.module.css'
import GridListagem from '@/components/cardListagem/GridListagem';
import Footer from '@/components/footer/footer';
import Carousel from '@/components/carrosselListagem/carrosselListagem';
import { GoFilter } from "react-icons/go";
import { PiUserCircleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

function ListagemTatuadores() {
  return (
    <section>
      <div className={styles.gradientInicio}>
      <div className={styles.navBar}>
        <Link to='/'>
          <div className={styles["logo"]}>
            <img src={logoBranca} alt="Logo Branca" />
          </div>
        </Link>
        <div className={styles["botao-entrar"]}>
          <PiUserCircleLight />
          <Link to='/login'>Sou um Tatuador</Link>
        </div>
      </div>
      <div className={styles.inicio}>
      <div className={styles.fraseInicio}>
        <h3 className="text-gray-100">Encontre o seu artista <span className="text-gray-900">ideal</span>.</h3>
      </div>
        <div className={styles["inputs"]}>
          <input type="text" id="campo_texto" placeholder="Pesquise por tatuadores perto de você" className={styles.pesquisa} />
          <input type="text" id="campo_texto" placeholder="Onde?" className={styles.onde} />
        </div>
      </div>
      <span className={styles["categoria"]}>
        <h5 className="text-gray-100">Navegue por<span className="text-purple-600"> estilo</span>.</h5>
      </span>
      </div>
      <div className={styles.gradientFim}>
      <Carousel />
      <div className={styles["filtro"]}>
        <GoFilter className={styles.icon} size={32} />
        <a>Filtros</a>
      </div>
      <div className={styles.content}>
        {/* Exibindo os componentes GridListagem em grupos de três */}
        <div className={styles.cardRow}>
          <GridListagem className={styles.cardListagem} />
          <GridListagem className={styles.cardListagem} />
        </div>
        <div className={styles.cardRow}>
          <GridListagem className={styles.cardListagem} />
          <GridListagem className={styles.cardListagem} />
        </div>
        <div className={styles.cardRow}>
          <GridListagem className={styles.cardListagem} />
          <GridListagem className={styles.cardListagem} />
        </div>
        {/* Adicione mais grupos de três conforme necessário */}
      </div>
      <Footer />
      </div>
    </section>


  );
}

export default ListagemTatuadores;
