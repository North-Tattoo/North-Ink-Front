import React from 'react';
import logoBranca from '../../utils/assets/logo-branca.png';
import styles from './ListagemTatuadores.module.css'
import filtroIcone from '../../utils/assets/filtro-icone.png';
import fundoListagem from '../../utils/assets/fundo-listagem.png';
import GridListagem from '@/components/cardListagem/GridListagem';
import Footer from '@/components/footer/footer';
import Carousel from '@/components/carrosselListagem/carrosselListagem';
import { GoFilter } from "react-icons/go";
import { PiUserCircleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

function ListagemTatuadores() {
  return (

    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link to='/'>
          <div className={styles["logo"]}>
            <img src={logoBranca} alt="Logo Branca" />
          </div>
        </Link>
        <div className={styles["botao-entrar"]}>
          <PiUserCircleLight />
          <Link to='/cadastro'>Sou um Tatuador</Link>
        </div>
      </div>
      <div className={styles.inicio}>
      <div className={styles.fraseInicio}>
        <h3 className={styles.fraseBranca}>Encontre o seu artista <span className={styles.fraseRoxa}>ideal</span>.</h3>
      </div>
        <div className={styles["inputs"]}>
          <input type="text" id="campo_texto" placeholder="Pesquise por tatuadores perto de você" className={styles.pesquisa} />
          <input type="text" id="campo_texto" placeholder="Onde?" className={styles.onde} />
        </div>
      </div>
      <span className={styles["categoria"]}>
        <h5 className={styles.naveguePor}>Navegue por<span className={styles.porEstilo}> estilo</span>.</h5>
      </span>
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
          <GridListagem className={styles.cardListagem} />
        </div>
        <div className={styles.cardRow}>
          <GridListagem className={styles.cardListagem} />
          <GridListagem className={styles.cardListagem} />
          <GridListagem className={styles.cardListagem} />
        </div>
        <div className={styles.cardRow}>
          <GridListagem className={styles.cardListagem} />
          <GridListagem className={styles.cardListagem} />
          <GridListagem className={styles.cardListagem} />
        </div>
        {/* Adicione mais grupos de três conforme necessário */}
      </div>
      <Footer />
    </div>


  );
}

export default ListagemTatuadores;
