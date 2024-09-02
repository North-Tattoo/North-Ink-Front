import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./Assinatura.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Assinatura() {
  const navigate = useNavigate(); 

  function assinar() {
    console.log('1');
    
    navigate('/assinatura/pagamento');

    console.log('2');
  }

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
                  Apareça em primeiro lugar nas pesquisas e atraia mais clientes.
                </div>
              </li>
              <li>
                <div className={styles["item"]}>
                  <FaCheckCircle className={styles["icon-check"]} />
                  Acesse uma dashboard de métricas exclusiva para acompanhar seu desempenho.
                </div>
              </li>
            </ul>
            <button onClick={assinar} className={styles.botaoAssinar}>ASSINAR</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Assinatura;
