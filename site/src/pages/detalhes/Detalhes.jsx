import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detalhes.module.css";
import logoPreta from "../../utils/assets/logo-preta.png";
import imagemPerfil from "../../utils/assets/tatuador-grid.png";
import { PiUserCircleLight, PiInstagramLogoThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AiOutlineLeft, AiOutlineShareAlt } from "react-icons/ai";
import Footer from "@/components/footer/footer";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiTimerLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import WhatsAppButton from '@/components/whastApp/WhatsAppButton'
import InstagramButton from "@/components/instagram/InstagramButton";
import { IoChevronBackCircle } from "react-icons/io5";
import api from '../../api';
import {toast } from 'react-toastify';
import axios from 'axios';

import LeafletMapComponent from "@/components/leafLetMap/LeafletMapComponent";

import 'leaflet/dist/leaflet.css';



function Detalhes() {
  const [usuario, setUsuario] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const { id } = useParams();

  useEffect(() => {
    api.get(`api/usuarios/portfolio/${id}`)
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar tatuador:", error);
      });

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/images", {
          params: { folder: "2_Murilo/tattos_images" },
        });
        setImages(response.data);
        setLoading(false); // Imagens carregadas, atualiza o estado
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
        setLoading(false); // Caso ocorra erro, também atualiza o estado para não travar a tela
      }
    };

    fetchImages();
  }, []);

  return (
    <section className={styles["section-detalhes"]}>
      <header className={styles["header-detalhes"]}>
        <Link to='/'>
          <img src={logoPreta} alt="Logo" />
        </Link>
        <span className={styles.tituloPortifolio}>Conheça o artista, explore estilos.</span>
      </header>

      <div className={styles["container-detalhes"]}>
        <article className={styles["informacoes"]}>
          <div className={styles["botoes-informacoes"]}>
            <Link to='/listagem-tatuadores'>
              <IoChevronBackCircle style={{ color: '#121212' , marginLeft: '10px', marginTop: '10px' }} size={40} />
            </Link>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex">
              <img
                alt="Logo Branca"
                className="w-16 mb-4 rounded-full m-2 mt-9 ml-5"
              />
              <div className="ml-3 mt-16">
                <h2 className="text-lg font-bold">{`${usuario.nome} ${usuario.sobrenome}`}</h2>
              </div>
            </div>

            <div className={styles.valorTempoDetalhes}>
              <div className={styles.valorMinimo}>
                <RiMoneyDollarCircleFill className="mr-4" style={{ color: '#3C3C3C' }} size={20} />
                <span>VALOR MÍNIMO: R$ {usuario.valorMin}</span><br />
              </div>
              <div className={styles.valorMinimo}>
                <RiTimerLine className="mr-4" style={{ color: '#3C3C3C' }} size={20} />
                <span>TEMPO DE EXPERIÊNCIA: {usuario.anosExperiencia}</span>
              </div>
            </div>

            <div className="mt-12 ml-5">
              <h3 className="text-xl font-semibold mb-6">Bio</h3>
              <p className="text-sm text-justify w-80 break-words">
                {usuario.resumo}
              </p>
            </div>

            <WhatsAppButton phoneNumber={usuario.telefone} />

            <div className={styles["linha-detalhes"]}></div>
          </div>

          <div className="mt-2">
            <h2 className="text-xl ml-5 mt-10 font-semibold">Estilos</h2>
            <div className="grid grid-cols-3 gap-7 p-1 ml-4 mt-4 mr-5">
              {usuario && usuario.estilos && usuario.estilos.map((estilo) => (
                <Badge key={estilo.id} className={styles.estilosDetalhes}>
                  {estilo.nome}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <div className={styles["linha-detalhes-dois"]}></div>
          </div>

          <h2 className="text-xl font-semibold mt-8 ml-5">Ambiente de Trabalho</h2>
          <div className={styles["estudio-detalhes"]}>
            <div className={styles["nome-estudio-detalhes"]}>
              <h3 className="ml-7 mt-7 text-xl font-semibold">{usuario.estudio ? usuario.estudio.nome : "Estúdio não disponível"}</h3>
            </div>
          </div>

          <div className={styles.enderecoIcone}>
            <MdLocationPin style={{ color: '#3C3C3C' }} size={20} />
            <p className={styles.enderecoDetalhes}>
              {usuario.estudio?.endereco?.rua ?? "Rua não disponível"}, {usuario.estudio?.endereco?.numero ?? "Nº não disponível"} -
              {usuario.estudio?.endereco?.bairro ?? "Bairro não disponível"}
            </p>
          </div>

          <div className="ml-4 mt-4">
            <LeafletMapComponent />
          </div>

          <div className="mt-12 ml-5">
            <h3 className="text-xl font-semibold mb-6">Descrição</h3>
            <p className="text-sm text-justify w-80">
              {usuario.estudio?.descricao ?? "Descrição não disponível"}
            </p>
          </div>

          <div className="mt-2">
            <div className={styles["linha-detalhes-dois"]}></div>
          </div>

          <div className={styles["instagram"]}>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-16">
              <InstagramButton username={usuario.instagram} />
            </div>
          </div>
        </article>

        {/* Exibe o spinner ou as imagens, dependendo do estado de carregamento */}
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className={styles["row-detalhes"]}>
            <div className={styles["column-detalhes"]}>
              <div className={styles["container-imagem"]}>
                <img id="image" src={images[0].url} alt="image 0" />
              </div>
              <img src={images[1].url} alt="image 1" />
              <img src={images[2].url} alt="image 2" />
              <img src={images[3].url} alt="image 3" />
            </div>
            <div className={styles["column-detalhes"]}>
              <img src={images[4].url} alt="Tattoo oriental" />
              <img src={images[5].url} alt="Tattoo horizontal" />
              <img src={images[6].url} alt="Tattoo horizontal" />
              <img src={images[7].url} alt="Tattoo horizontal" />
            </div>
            <div className={styles["column-detalhes"]}>
              <img src={images[8].url} alt="Tattoo antebraço" />
              <img src={images[9].url} alt="Pescoço" />
              <img src={images[10].url} alt="Ombro" />
              <img src={images[11].url} alt="Tattoo antebraço" />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
}

export default Detalhes;
