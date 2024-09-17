import React, { useState, useEffect } from "react";
import GoogleChart from "react-google-charts";
import api from "../../api";

function PieChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/dashboard/top3Estilos");
      const data = response.data.map((item) => [item.nome, item.count]);
      setChartData(data);
      console.log("Dados recuperados:", data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const options = {
    title: "Tendências de Estilos na North Ink.",
    slices: [
      { color: "#3D0867" },
      { color: "#BC77FE" },
      { color: "#9326F6" },
    ],
    titleTextStyle: {
      fontSize: 18,
      color: "#3C3C3C",
    },
  };

  return (
    <GoogleChart
      chartType="PieChart"
      data={[["Estilo", "Contagem"], ...chartData]}
      options={options}
      width="500px"
      height="300px"
    />
  );
}

export default PieChart;
