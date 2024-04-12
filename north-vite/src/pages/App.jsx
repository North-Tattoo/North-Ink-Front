import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cadastro from "./cadastro/Cadastro";
import ListagemTatuadores from "./listagemTatuadores/ListagemTatuadores";


function App(){
  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<h1>404 Not found</h1>}/>
              <Route path="/" element={<Home />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/listagem-tatuadores" element={<ListagemTatuadores/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;