import React, { useState } from 'react';
import Styles from '../modalFiltros/ModalFiltros.module.css';

const estilosTatuagem = [
  { id: 'old-school', nome: 'Old School' },
  { id: 'blackwork', nome: 'Blackwork' },
  { id: 'pontilhismo', nome: 'Pontilhismo' },
  { id: 'new-school', nome: 'New School' },
  { id: 'minimalismo', nome: 'Minimalismo' },
  { id: 'neo-traditional', nome: 'Neo Traditional' },
  { id: 'realismo', nome: 'Realismo' },
  { id: 'lettering', nome: 'Lettering' },
  { id: 'oriental', nome: 'Oriental' },
  { id: 'aquarela', nome: 'Aquarela' },
  { id: 'geometrico', nome: 'Geométrico' },
  { id: 'trashpolka', nome: 'Trash Polka' },
];

const ModalFiltros = ({ isOpen, onClose }) => {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [nome, setNome] = useState('');
  const [valorMinimo, setValorMinimo] = useState('');
  const [cidade, setCidade] = useState('');

  const handleStyleChange = (styleId) => {
    setSelectedStyles((prevSelected) => {
      if (prevSelected.includes(styleId)) {
        return prevSelected.filter((id) => id !== styleId);
      } else {
        return [...prevSelected, styleId];
      }
    });
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (nome) params.append('nome', nome);
    if (selectedStyles.length > 0) params.append('estilos', selectedStyles.join(','));
    if (valorMinimo) params.append('valorMinimo', valorMinimo);
    if (cidade) params.append('cidade', cidade);

    fetch(`http://localhost:8080/api/usuarios/buscar?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
      .then(response => response.json())
      .then(data => {
          console.log('Dados recebidos:', data);
      })
      .catch(error => {
          console.error('Erro ao buscar os dados:', error);
      });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        <button className={Styles.closeButton} onClick={onClose}>X</button>
        <h2 className={Styles.modalTitle}>Filtros</h2>

        <div className={Styles.name}>
          <label className={Styles.filterLabel}>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={Styles.filterInput}
          />
        </div>

        <div className={Styles.inlineGroup}>
          <div className={Styles.filterGroup}>
            <label className={Styles.filterLabel}>Cidade</label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className={`${Styles.filterInput} ${Styles.cidadeInput}`}
            />
          </div>

          <div className={Styles.filterGroup}>
            <label className={Styles.filterLabel}>Valor</label>
            <input
              type="number"
              value={valorMinimo}
              onChange={(e) => setValorMinimo(e.target.value)}
              className={`${Styles.filterInput} ${Styles.valorInput}`}
            />
          </div>
        </div>

        <div className={Styles.stylesGroup}>
          <label className={Styles.stylesLabel}>Estilos</label>
          <div className={Styles.stylesContainer}>
            {estilosTatuagem.map((estilo) => (
              <div key={estilo.id} className={Styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id={estilo.id}
                  checked={selectedStyles.includes(estilo.id)}
                  onChange={() => handleStyleChange(estilo.id)}
                  className={Styles.checkboxInput}
                />
                <label htmlFor={estilo.id} className={Styles.checkboxLabel}>{estilo.nome}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.buttonContainer}>
          <button className={Styles.applyFiltersButton} onClick={applyFilters}>Aplicar Filtros</button>
        </div>
      </div>
    </div>
  );
};

export default ModalFiltros;