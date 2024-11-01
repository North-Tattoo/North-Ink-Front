import React, { useState, useEffect } from "react";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./Assinatura.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../../api";

function Assinatura() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [usuarioAssinatura, setUsuarioAssinatura] = useState(null);

  useEffect(() => {
    const fetchAssinaturaStatus = async () => {
      const userId = sessionStorage.getItem("userId");
      try {
        const response = await api.get(`/api/usuarios/${userId}/assinatura`);
        setUsuarioAssinatura(response.data); // Armazena o objeto completo retornado da API
      } catch (error) {
        console.error("Erro ao buscar status de assinatura:", error);
      }
    };

    fetchAssinaturaStatus();
  }, []);

  const assinar = async () => {
    setLoading(true); // Exibe o modal com spinner
    const nomeCompleto = `${sessionStorage.getItem(
      "userName"
    )} ${sessionStorage.getItem("userSurname")}`;
    const cpf = sessionStorage.getItem("userCpf");

    try {
      const response = await axios.post(
        "https://api-pagamento-n67l.onrender.com/api/generate-qrcode",
        {
          nome: nomeCompleto,
          cpf: cpf,
        }
      );

      // const response = await axios.post(
      //   "http://localhost:5000/api/generate-qrcode",
      //   {
      //     nome: nomeCompleto,
      //     cpf: cpf,
      //   }
      // );

      window.open(response.data.linkVisualizacao, "_blank");
    } catch (error) {
      console.error("Erro ao gerar o QR Code Assinatura.jsx:", error);
    } finally {
      setLoading(false);
    }
  };

  // Verifica se o usuário é assinante
  if (usuarioAssinatura && usuarioAssinatura.assinante) {
    const { diasRestantes } = usuarioAssinatura;

    return (
      <div style={{ display: "flex" }}>
        <SidebarGerenciamentoConta />
        <section className={`${styles["fora-da-sidebar"]} ${styles["center-container"]}`}>
          <div className={styles["assinante-container"]}>
            <h1 className={styles["titulo-assinante"]}>🎉 Você já é assinante!</h1>
            <p className={styles["mensagem-assinante"]}>
              Obrigado por apoiar a North Ink! Aproveite os benefícios do seu plano de assinatura e se destaque na plataforma.
            </p>
            <div className={styles["info-assinante"]}>
              <p><strong>Dias restantes:</strong> {diasRestantes} dia{diasRestantes !== 1 ? "s" : ""}</p>
              <p>Seu perfil já está em destaque na tela inicial, aparecendo em primeiro lugar nas pesquisas!</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Tela de assinatura padrão
  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <h1>Destaque seu perfil.</h1>
        <span>
          A North Ink valoriza a sua arte! Assine nosso plano exclusivo e
          destaque-se na página inicial. Com a assinatura, seu perfil será
          exibido em destaque, garantindo que os clientes te encontrem primeiro
          quando visitarem nossa plataforma.
        </span>

        <div className={styles["container-card"]}>
          <div className={styles.card}>
            <h2>Tatto Master</h2>
            <h1>
              R$ 29,99 <span>/ mês</span>
            </h1>
            <hr className={styles.divisor} />
            <ul>
              <li>
                <div className={styles["item"]}>
                  <FaCheckCircle className={styles["icon-check"]} />
                  Tenha destaque garantido na tela inicial, aumentando sua
                  visibilidade.
                </div>
              </li>
              <li>
                <div className={styles["item"]}>
                  <FaCheckCircle className={styles["icon-check"]} />
                  Apareça em primeiro lugar nas pesquisas e atraia mais
                  clientes.
                </div>
              </li>
              <li>
                <div className={styles["item"]}>
                  <FaCheckCircle className={styles["icon-check"]} />
                  Acesse uma dashboard de métricas exclusiva para acompanhar seu
                  desempenho.
                </div>
              </li>
            </ul>
            <button onClick={assinar} className={styles.botaoAssinar}>
              ASSINAR
            </button>
          </div>
        </div>
      </section>

      {/* Modal com Spinner */}
      {loading && (
        <div className={styles.modal}>
          <div className={styles.spinner}></div>
          <p>Processando sua assinatura...</p>
        </div>
      )}
    </div>
  );
}

export default Assinatura;
