import React, { useState } from "react";
import styles from "./GerenciamentoConta.module.css";
import logo from "../../utils/assets/logo-preta.png";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { GrWorkshop } from "react-icons/gr";
import Perfil from '@/components/perfil/Perfil';
import Portifolio from "@/components/meuPortifolio/Portifolio";
import Studio from "@/components/meuStudio/Studio";
import { HiHome } from "react-icons/hi2";
import { Link, Navigate } from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi";
import api from "../../api";



function GerenciamentoConta({userName}) {
    const [activeTab, setActiveTab] = useState(null); // Initial active tab

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            if (button.classList.contains('hoverFixed')) {
                button.classList.remove('hoverFixed');
            }
        });
        const activeButton = document.querySelector(`.button[data-tab='${tabName}']`);
        activeButton.classList.add('hoverFixed');
    };

    const [loggedOut, setLoggedOut] = useState(false);

    const handleLogout = () => {
        api.post("/usuarios/logout")
            .then((response) => {
                if (response.status === 200) {
                    setTimeout(() => {
                        setLoggedOut(true);
                    }, 1000);
                }
            })
            .catch((error) => {
                console.error(error);
                // Aqui você pode lidar com erros de logout, se necessário
            });
    }
    if (loggedOut) {
        return <Navigate to="/login" />;
    }

    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <div className={styles.menu}>

                    <img className="w-54 mt-2" src={logo} alt="logo" />

                    <div className="botoes flex flex-col w-full items-start justify-evenly space-y-12 font-poppins mt-12 text-3xl text-slate-950">
                        <button className={`button ${activeTab === 'perfil' ? 'activeButton' : ''} w-80 h-14 rounded-lg hover:bg-violet-200 hover:bg-opacity-50 hoverFixed flex items-center gap-8`}
                            onClick={() => handleTabClick('perfil')} data-tab="perfil">
                            <CgProfile className="inline-block ml-5 w-9 h-9 text-purple-800" />
                            Meu Perfil
                        </button>
                        <button className={`button ${activeTab === 'portifolio' ? 'activeButton' : ''} w-80 h-14 rounded-lg hover:bg-violet-200 hover:bg-opacity-50 hoverFixed flex items-center gap-8`}
                            onClick={() => handleTabClick('portifolio')}>
                            <ImProfile className="inline-block ml-5 text-purple-800" />
                            Meu Portifólio
                        </button>
                        <button className={`button ${activeTab === 'studio' ? 'activeButton' : ''} w-80 h-14 rounded-lg hover:bg-violet-200 hover:bg-opacity-50 hoverFixed flex items-center gap-8`}
                            onClick={() => handleTabClick('studio')}>
                            <GrWorkshop className="inline-block ml-5 text-purple-800" />
                            Meu Studio
                        </button>
                        <button className={`button ${activeTab === 'studio' ? 'activeButton' : ''} w-80 h-14 rounded-lg hover:bg-violet-200 hover:bg-opacity-50 hoverFixed flex items-center gap-8`}
                            onClick={() => handleLogout()}>
                            <BiLogOutCircle className="inline-block ml-5 text-purple-800" />
                            Sair
                        </button>
                    </div>
                </div>
                <div className={styles.text}>
                    {activeTab !== 'perfil' && activeTab !== 'portifolio' && activeTab !== 'studio' && (
                        <h1 class="text-white">Gerencie sua <span class="text-black">conta</span>.</h1>
                    )}
                    {activeTab !== 'perfil' && activeTab !== 'portifolio' && activeTab !== 'studio' && (
                        <div className={styles.profileInfo}>
                           
                                <h2 class="text-5xl">Bem Vindo {userName}!</h2>
                            
                            <HiHome size={100} />
                            <span class="text-4xl">Página Inicial do Perfil</span>
                            <p class="text-lg">Aqui você verá um resumo do seu perfil</p>
                        </div>
                    )}
                </div>
                <div className="text my-10 font-poppins text-6xl">
                    {activeTab === 'perfil' && <Perfil />}
                    {activeTab === 'portifolio' && <Portifolio />}
                    {activeTab === 'studio' && <Studio />}
                </div>

            </div>
        </div>
    );
}
export default GerenciamentoConta;