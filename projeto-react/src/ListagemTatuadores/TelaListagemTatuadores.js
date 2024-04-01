import '../ListagemTatuadores/listagem-tatuadores.css';

import FundoSection from './FundoSection.js';
import InicioSection from './InicioSection.js';
import ListagemCarrossel from './ListagemCarrossel.js';
import ListagemTatuadores from './ListagemTatuadores.js';
import Footer   from '../LandingPage/Footer.js'

function TelaListagemTatuadores() {
  return (
    <>
      <FundoSection />
      <InicioSection />
      <ListagemCarrossel />
      <ListagemTatuadores />
      <Footer />
    </>
  );
}

export default TelaListagemTatuadores;