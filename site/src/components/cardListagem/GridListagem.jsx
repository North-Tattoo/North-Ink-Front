import React, { useEffect, useState } from 'react';
import styles from './GridListagem.module.css';
import studioTatuagens from '../../utils/assets/tatuagem-grid-card.jpg'
import fotoPerfilGrid from '../../utils/assets/tatuador-grid.png'
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import aquarela from '../../utils/assets/aquarela.jpeg'
import blackwork from '../../utils/assets/blackwork.jpeg'
import pontilhismo from '../../utils/assets/pontilhismo-2.jpg'
import realismo from '../../utils/assets/realismo.jpeg'
import minimalismo from '../../utils/assets/minimalista.jpeg'
import geometrico from '../../utils/assets/geometrico.jpg'
import Lettering from '../../utils/assets/Lettering.jpeg'
import NewSchool from '../../utils/assets/New School.jpg'
import OldSchool from '../../utils/assets/OldSchool.jpg'
import Oriental from '../../utils/assets/Oriental.jpg'
import TrashPolka from '../../utils/assets/TrashPolka.jpg'
import NeoTraditional from '../../utils/assets/NeoTraditional.jpeg'


function GridListagem() {

  const [tatuadores, setTatuadores] = useState([]);

  useEffect(() => {
    api.get('/tatuadores')
      .then(response => {
        if (Array.isArray(response.data)) {
          setTatuadores(response.data);
        } else {
          setTatuadores([
            {
              id: 1,
              nome: "Marcela",
              rua: "Rua Ficticia",
              numero: "123",
              bairro: "Ficção",
              precoMin: "100,00",
              estilos: ["Blackwork"]
            },
            {
              id: 2,
              nome: "João",
              rua: "Rua Real",
              numero: "456",
              bairro: "Realidade",
              precoMin: "150,00",
              estilos: ["Realismo", "Aquarela", "Geométrico"]
            },
            {
              id: 3,
              nome: "João",
              rua: "Rua Real",
              numero: "456",
              bairro: "Realidade",
              precoMin: "150,00",
              estilos: ["Realismo", "Aquarela", "Geométrico"]
            },
            {
              id: 4,
              nome: "João",
              rua: "Rua Real",
              numero: "456",
              bairro: "Realidade",
              precoMin: "150,00",
              estilos: ["Realismo", "Aquarela", "Geométrico"]
            },

          ]);

        }

      })
      .catch(error => {
        toast.error("Erro ao buscar os dados dos tatuadores");
        console.error(error);
      });
  }, []);

  const imagens = [
    aquarela,
    blackwork,
    pontilhismo,
    realismo,
    minimalismo,
    geometrico,
    Lettering,
    NewSchool,
    OldSchool,
    Oriental,
    TrashPolka,
    NeoTraditional
  ];

  const sortearImagens = () => {
    let numerosSorteados = [];
    while (numerosSorteados.length < 3) {
      let numero = Math.floor(Math.random() * imagens.length);
      if (!numerosSorteados.includes(numero)) {
        numerosSorteados.push(numero);
      }
    }
    return numerosSorteados.map(i => imagens[i]);
  };

  return (
    <div className={styles.gridListagem}>
      {tatuadores.map(tatuador => {
        const imagensSorteadas = sortearImagens();
        return (
          <div key={tatuador.id} className={styles.cardStudio}>
            <div className={styles.fotosServicos}>
              {imagensSorteadas.map((imagem, index) => (
                <div key={index} className={styles.imagemWrapper}>
                  <img className={`${styles.imagem} imagem${index + 1}`} src={imagem} alt="" />
                </div>
              ))}
            </div>
            <Link to='/detalhes'>
              <div className={styles.pointerSombra}>
                <div className={styles.informacoesStudio}>
                  <img className={styles.fotoPerfil} src={fotoPerfilGrid} alt="" />
                  <div className={styles.informacoes}>
                    <h5 className="font-bold">{tatuador.nome}</h5>
                    <div className={styles.line}>
                      <MdLocationPin style={{ color: '#A855F7' }} size={20} />
                      <p className="ml-4">{`${tatuador.rua}, ${tatuador.numero} - ${tatuador.bairro}`}</p>
                    </div>
                    <div className={styles.line}>
                      <RiMoneyDollarCircleFill className="mr-4" style={{ color: '#A855F7' }} size={20} />
                      <p className="font-bold" >Taxa Minima: R$ {tatuador.precoMin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className={styles.iconeContainer}>
              {tatuador.estilos.map(estilo => (
                <div key={estilo} className={styles.icone}>{estilo}</div>
              ))}
            </div>
            <Link to='/detalhes'>
              <div className={styles.botaoTenhoInteresse}>
                <button className={styles.tenhoInteresse}>Ver Portifólio</button>
              </div>
            </Link>
           <ToastContainer />
          </div>
        );
      })}
    </div>
  );
};

  export default GridListagem;
