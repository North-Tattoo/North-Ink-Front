import React from 'react';
import logoBranca from '../../utils/assets/logo-branca.png';
import styles from './ListagemTatuadores.module.css'
import filtroIcone from '../../utils/assets/filtro-icone.png';
import fundoListagem from '../../utils/assets/fundo-listagem.png';
import perfilTatuador from '../../utils/assets/perfil.png'
import GridListagem from '@/components/cardListagem/GridListagem';
import { Link } from 'react-router-dom';

function ListagemTatuadores() {
  return (
    
      <div className={styles.container}>
        <div className={styles["inicio"]}>
          <img src={fundoListagem} alt='Fundo Listagem'></img>
          <div className={styles["logo"]}>
            <img src={logoBranca} alt="Logo Branca" />
          </div>
          <div className={styles["botao-entrar"]}>
            <img src={perfilTatuador}></img>
            <a href="#">Sou um Tatuador</a>
          </div>
          <div className={styles["inputs"]}>
            <input type="text" id="campo_texto" placeholder="Pesquise por tatuadores perto de você" className={styles["pesquisa"]} />
            <input type="text" id="campo_texto" placeholder="Onde?" className={styles["onde"]} />
          </div>
        </div>
        <span className={styles["categoria"]}>
          Categoria: Mais Procurados
        </span>
        <div className={styles["filtro"]}>
          <img src={filtroIcone} alt="Filtro Icone" />
          <a>Filtros</a>
        </div>
        <div className={styles.content}>
        {/* Exibindo os componentes GridListagem em grupos de três */}
        <div className={styles.cardRow}>
          <GridListagem />
          <GridListagem />
          <GridListagem />
        </div>
        <div className={styles.cardRow}>
          <GridListagem />
          <GridListagem />
          <GridListagem />
        </div>
        {/* Adicione mais grupos de três conforme necessário */}
      </div>
    </div>
      
    
  );
}

export default ListagemTatuadores;
