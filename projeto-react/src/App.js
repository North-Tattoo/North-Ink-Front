import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";
import LandingPage from "./LandingPage/LandingPage";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<h1>404 Not found</h1>}/>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;