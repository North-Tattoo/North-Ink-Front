import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import styles from "../../pages/gerenciamento/GerenciamentoPortfolio/GerenciamentoPortfolio.module.css";
import { TiDelete } from "react-icons/ti";

const EstilosComponent = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [estilos, setEstilos] = useState([]);

  const handleAddStyle = () => {
    if (selectedStyle && !estilos.some(estilo => estilo.nome === selectedStyle)) {
      const newEstilo = { nome: selectedStyle };
      const newEstilos = [...estilos, newEstilo];
      setEstilos(newEstilos);
      onChange(newEstilos); // Passa os novos estilos para o componente pai
    }
  };

  const handleRemoveStyle = (index) => {
    const newEstilos = estilos.filter((_, i) => i !== index);
    setEstilos(newEstilos);
    onChange(newEstilos); // Atualiza os estilos no componente pai
  };

  return (
    <div>
      <p className={styles.tituloValorMin}>Estilos</p>
      <div className="grid grid-cols-3">
        {estilos.map((estilo, index) => (
          <div key={index} className={styles.estiloItem}>
            <Badge className={styles.estilosDetalhes}>
              {estilo.nome}
            </Badge>
            <TiDelete 
              style={{ color: '#5B5B5B' }} 
              size={20}
              onClick={() => handleRemoveStyle(index)}
            />
          </div>
        ))}
      </div>
      <select
        className={styles.caixaSelecaoEstilosPortifolio}
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value)}
      >
        <option value="">Selecione um Estilo</option>
        <option value="Old School">Old School</option>
        <option value="New School">New School</option>
        <option value="Realismo">Realismo</option>
        <option value="Aquarela">Aquarela</option>
        <option value="Blackwork">Blackwork</option>
        <option value="Minimalismo">Minimalismo</option>
        <option value="Lettering">Lettering</option>
        <option value="Geométrico">Geométrico</option>
        <option value="Pontilhismo">Pontilhismo</option>
        <option value="Neo Traditional">Neo Traditional</option>
        <option value="Oriental">Oriental</option>
        <option value="Trash Polka">Trash Polka</option>
      </select>
      <button className={styles.botaoGerenciamento} onClick={handleAddStyle}>
        + Adicionar Estilo
      </button>
    </div>
  );
};

export default EstilosComponent;