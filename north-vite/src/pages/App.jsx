import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cadastro from "./cadastro/Cadastro";


function App(){
  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<h1>404 Not found</h1>}/>
              <Route path="/" element={<Home />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;