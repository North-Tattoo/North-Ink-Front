import React, { useState, useEffect } from "react";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./GerenciamentoDestaques.module.css";
import PieChart from "@/components/PieChart/PieChart.jsx";
import BarChart from "@/components/BarChart/BarChart";
import api from "../../../api";
import { useNavigate } from 'react-router-dom';

function Destaques() {
  const navigate = useNavigate();
  const [usuarioAssinatura, setUsuarioAssinatura] = useState(null); // Variável global para o status da assinatura

  useEffect(() => {
    const fetchAssinaturaStatus = async () => {
      const userId = sessionStorage.getItem('userId');
      try {
        const response = await api.get(`/api/usuarios/${userId}/assinatura`);
        setUsuarioAssinatura(response.data); // Armazena o objeto completo retornado da API
      } catch (error) {
        console.error("Erro ao buscar status de assinatura:", error);
      }
    };

    fetchAssinaturaStatus();
  }, []);

  // Verifica se o usuário é assinante
  if (usuarioAssinatura && !usuarioAssinatura.assinante) {
    return (
      <div style={{ display: "flex" }}>
        <SidebarGerenciamentoConta />
        <section className={`${styles["fora-da-sidebar"]} ${styles["center-container"]}`}>
          <div className={styles["assinatura-requerida-container"]}>
            <h1 className={styles["titulo-assinatura-requerida"]}>Destaques Exclusivos para Assinantes</h1>
            <p className={styles["mensagem-assinatura-requerida"]}>
              Assine nosso plano para ter acesso às tendências e métricas exclusivas do mundo da tatuagem.
            </p>
            <button
              className={styles["botao-assinar"]}
              onClick={() => navigate('/assinatura')}
            >
              Assinar Agora
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <h1 className={styles.tituloDestaques}>Destaques</h1>
        <h3>Fique por dentro das tendências no mundo da tatuagem.</h3>
        <div className={styles["graficosDestaques"]}>
          <div className={styles["container-chart"]}>
            <PieChart />
          </div>
          <div className={styles["container-chart"]}>
            <BarChart />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destaques;
