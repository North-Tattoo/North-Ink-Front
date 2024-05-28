import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '5511980925594'; // Substitua pelo número de telefone desejado, com código do país
  const message = 'Oi, Estou interessada(o) pelo seu trabalho!'; // Substitua pela mensagem desejada

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} >
      Entrar em Contato
    </button>
  );
};

export default WhatsAppButton;