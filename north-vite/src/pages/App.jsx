import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cadastro from "./cadastro/Cadastro";
import Detalhes from "./detalhes/Detalhes";
import ListagemTatuadores from "./listagemTatuadores/ListagemTatuadores";
import NotFound from "./notFound/NotFound"
// import GerenciamentoConta from "./gerenciamentoConta/GerenciamentoConta"

function App(){
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/detalhes" element={<Detalhes />}/>
              <Route path="/*" element={<NotFound />} />
              <Route path="/listagem-tatuadores" element={<ListagemTatuadores/>}/>
              {/* <Route path="/gerenciamento-conta" element={<GerenciamentoConta/>}/> */}  
          </Routes>
      </BrowserRouter>
  )
}

export default App;