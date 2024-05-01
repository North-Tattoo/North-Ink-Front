import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cadastro from "./cadastro/Cadastro";
import Detalhes from "./detalhes/Detalhes";
import ListagemTatuadores from "./listagemTatuadores/ListagemTatuadores";
import NotFound from "./notFound/NotFound"
import Login from "./login/Login";
import GerenciamentoConta from "./gerenciamentoConta/GerenciamentoConta"
import api from "../api";

function App(){
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/detalhes" element={<Detalhes />}/>
              <Route path="/*" element={<NotFound />} />
              <Route path="/listagem-tatuadores" element={<ListagemTatuadores/>}/>
              <Route path="/gerenciamento-conta" element={<GerenciamentoConta/>}/>  
          </Routes>
      </BrowserRouter>
  )
}

export default App;