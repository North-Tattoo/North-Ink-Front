import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./AssinaturaPagamento.module.css";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaPix } from "react-icons/fa6";

function AssinaturaPagamento() {
  const handleCopy = () => {
    const texto = "1234.5678.9012.3456";

    navigator.clipboard
      .writeText(texto)
      .then(() => {
        toast.success("Código Pix copiado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao copiar código Pix.");
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <h1>Pagamento PIX.</h1>
        <div className={styles["container-card"]}>
          <div className={styles.card}>
            <span>Pedido #001</span>
            <h2>Valor da compra: R$ 29,99</h2>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <button onClick={handleCopy}>
              Copiar código Pix <FaCopy className={styles.icon} />
            </button>
            <div className={styles.msg_pix}>
              <span style={{ display: "inline-flex", alignItems: "center" }}>
                Pagar com Pix <FaPix className={styles.iconPix}/> é rápido e fácil!
              </span>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        className={styles.toast}
        autoClose={3000}
      ></ToastContainer>
    </div>
  );
}

export default AssinaturaPagamento;
