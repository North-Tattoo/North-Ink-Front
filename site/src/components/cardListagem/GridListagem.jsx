import React, { useEffect, useState } from 'react';
import styles from './GridListagem.module.css';
import studioTatuagens from '../../utils/assets/tatuagem-grid-card.jpg'
import fotoPerfilGrid from '../../utils/assets/tatuador-grid.png'
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';


function GridListagem() {
  const [tatuadores, setTatuadores] = useState([]);

  useEffect(() => {
    api.get('/tatuadores')
    .then(response => {
      if(Array.isArray(response.data)){
        setTatuadores(response.data);
      }else{
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

  return (
    <div className={styles.gridListagem}>
      
      {tatuadores.map(tatuador => (
      <div key={tatuador.id} className={styles.cardStudio}>
        <div className={styles.fotosServicos}>
          <div className={styles.imagemWrapper}>
            <img className={`${styles.imagem} imagem1`} src={studioTatuagens} alt="" />
          </div>
          <div className={styles.imagemWrapper}>
            <img className={`${styles.imagem} imagem2`} src="https://img.freepik.com/fotos-gratis/jovem-tatuada-nas-costas-esbanja-sensualidade-e-elegancia-gerada-por-ia_188544-45479.jpg?t=st=1712934895~exp=1712938495~hmac=b03642e8852d26e7de06a8bb3e355dca2bd7a402afa6ac63aa782fefad03fa8d&w=1060" alt="" />
          </div>
          <div className={styles.imagemWrapper}>
            <img className={`${styles.imagem} imagem3`} src="https://img.freepik.com/fotos-gratis/uma-mao-tatuada-de-mulher-segura-decoracao-de-flores-gerada-por-ia_188544-45554.jpg?t=st=1712936410~exp=1712940010~hmac=b6440133274260c03f7a2d3932e833553879dfe8c22c52e9b3f7262d1600e867&w=1060" alt="" />
          </div>
        </div>
        <Link to='/detalhes'>
          <div className={styles.pointerSombra}>
            <div className={styles.informacoesStudio}>
              <img className={styles.fotoPerfil} src={fotoPerfilGrid} alt="" />
              <div className={styles.informacoes}>
                <h5 className="font-bold">{tatuador.nome}</h5>
                <div className={styles.line}>
                  <MdLocationPin style={{ color: '#A855F7' }} size={20}/>
                  <p className="ml-4">{`${tatuador.rua}, ${tatuador.numero} - ${tatuador.bairro}`}</p>
                </div>
                <div className={styles.line}>
                  <RiMoneyDollarCircleFill className="mr-4" style={{ color: '#A855F7' }} size={20}/>
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
      ))}
    </div>
  );
}

export default GridListagem;
