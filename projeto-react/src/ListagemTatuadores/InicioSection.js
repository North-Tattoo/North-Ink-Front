import React from 'react';

function InicioSection() {
  return (
    <section className="inicio">
      <div className="logo">
        <img src="../../public/assets/logo-branca.png" alt="" />
      </div>
      <div className="botao-entrar">
        <ion-icon name="person-circle-outline"></ion-icon>
        <a href="#">Entrar</a>
      </div>
      <div className="inputs">
        <PesquisaInput placeholder="Pesquise por tatuadores perto de você" />
        <OndeInput placeholder="Onde?" />
      </div>
    </section>
  );
}

function PesquisaInput(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="pesquisa"
      style={{
        backgroundImage: `url('../../public/assets/lupa.png')`,
        backgroundSize: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '5px center'
      }}
    />
  );
}

function OndeInput(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="onde"
      style={{
        backgroundImage: `url('../../public/assets/localização.png')`,
        backgroundSize: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '5px center'
      }}
    />
  );
}

export default InicioSection;
