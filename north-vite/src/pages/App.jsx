import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cadastro from "./cadastro/Cadastro";
import Detalhes from "./detalhes/Detalhes";
import ListagemTatuadores from "./listagemTatuadores/ListagemTatuadores";
import Detalhes from "./detalhes/Detalhes";

function App(){
  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<h1>404 Not found</h1>}/>
              <Route path="/" element={<Home />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/detalhes" element={<Detalhes />}/>
              <Route path="/listagem-tatuadores" element={<ListagemTatuadores/>}/>
              <Route path="/detalhes" element={<Detalhes />}/>    
          </Routes>
      </BrowserRouter>
  )
}

export default App;