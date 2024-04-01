import React from 'react';

function GridListagem() {
  return (
    <div className="grid-listagem">
      <img src="../../public/assets/tatuador-grid.png" alt="" />
      <div className="informacoes-grid">
        <span className="titulo-studio">King Tatto</span>
        <span className="endereco-studio">Rua Fictícia, 123 - Ficção</span>
        <span>Tatto 10 cm R$ XX,XX</span>
        <div className="barra-roxa"></div>
        <span>Tatto 10 cm R$ XX,XX</span>
      </div>
      <div className="botoes-reserva">
        <button className="botao-reserva">Reservar</button>
        <button className="botao-reserva">Reservar</button>
      </div>
    </div>
  );
}

export default GridListagem;
