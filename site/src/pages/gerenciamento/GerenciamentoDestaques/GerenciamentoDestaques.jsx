import React from "react";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./GerenciamentoDestaques.module.css";
import PieChart from "@/components/PieChart/PieChart.jsx";
import BarChart from "@/components/BarChart/BarChart";
import LineChart from "@/components/LineChart/LineChart";
import api from "../../../api";

function Destaques() {

  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <h1 className={styles.tituloDestaques}>Destaques.</h1>
        <h3>Fique por dentro das tendencias no mundo da taguagem.</h3>
        <div className={styles["graficosDestaques"]}>
          <div className={styles["container-chart"]}>
            <PieChart />
          </div>
          <div className={styles["container-chart"]}>
            <BarChart />
          </div>
        </div>
        {/* <div className={styles.tituloGraficoLinha}>
                <LineChart/>
                </div> */}
      </section>
    </div>
  );
}

export default Destaques;
