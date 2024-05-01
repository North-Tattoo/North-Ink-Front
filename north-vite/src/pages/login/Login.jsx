import React, { useState } from "react";
import './Login.modules.css';
import { Link, Navigate } from 'react-router-dom';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../api";

function Login() {

    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    function notify(passou, mensagem) {
        if (passou) {
            toast.success(mensagem, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
        } else {
            toast.error(mensagem)
        }
    }

    const handleLogin = () => {
        // if (email === "northink@email.com" && senha === "North$") {
        //     notify(true, "Login bem sucedido!");
        //     setTimeout(() => {
        //         setLoggedIn(true);
        //     }, 1000);
        // } else {
        //     notify(false, "Email ou senha incorretos. Por favor, tente novamente.");
        // }
        const usuario = {
            email,
            senha
        }
        api.post("/usuarios/login", usuario)
    };

    if (loggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="inicio">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            <div className="login">
                <div className="conteudo-login">
                    <span className="frase-inicial-login">Seja bem <span className="text-black">vindo</span>.</span>
                    <div className="linha-login"></div>
                    <div className="campo-login">
                        <label htmlFor="email">E-mail</label>
                        <input
                            placeholder="exemplo@email.com"
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="campo-login">
                        <label className="label-senha-login" htmlFor="senha">Senha {mostrarSenha ?
                            <LuEyeOff onClick={toggleMostrarSenha} id="LuEye" /> :
                            <LuEye onClick={toggleMostrarSenha} id="LuEye" />
                        }</label>
                        <input
                            placeholder="*******"
                            type={mostrarSenha ? 'text' : 'password'}
                            id="senha"
                            name="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button className="avancar-login" onClick={handleLogin}>Entrar</button>
                    <span>Não tem uma conta? <Link to='/cadastro' className="text-purple-600">Faça seu cadastro</Link>.</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
