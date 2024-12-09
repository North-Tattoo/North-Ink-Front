import React from 'react';
import GoogleChart from 'react-google-charts';

const options = {
  title: 'Seus estilos mais cadastrados',
  bars: 'horizontal',
  series: {
    0: { color: '#BC77FE' },

  },
  slices: [
    { color: 0 , label: 'Blackwork', value: 2 },
    { color: 0 , label: 'Anime', value: 4 },
    { color: 0 , label: 'Realismo', value: 1 },
    { color: 0 , label: 'Mandala', value: 2 },
    { color: 0 , label: 'Dark', value: 3 },
  ],
  titleTextStyle: {
    fontSize: 18, 
    color: '#3C3C3C'
  },
  
};

const BarChart = () => (
  <GoogleChart
    chartType="BarChart" // Altera o tipo de gráfico para Barra
    data={[['Estilo', 'Estilos'], ...options.slices.map(slice => [slice.label, slice.value])]} // Ajusta o formato dos dados
    options={options}
    width="600px" // Ajusta a largura do gráfico
    height="300px" // Ajusta a altura do gráfico
  />
);  

export default BarChart;
