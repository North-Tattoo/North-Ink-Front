import React, { useState } from "react";
import styles from "./GerenciamentoConta.module.css";
import logo from "../../utils/assets/logo-preta.png";
import { Link } from 'react-router-dom';
import { PiUserCircleLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { GrWorkshop } from "react-icons/gr";
import Perfil from '@/components/perfil/Perfil';
import Portifolio from "@/components/meuPortifolio/Portifolio";
import Studio from "@/components/meuStudio/Studio";

function GerenciamentoConta() {
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

    return (
        <div className="bg-gradient-to-b from-purple-800 to-gray-900 min-h-screen">
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Link to='/'>
                        <img className="w-54 mt-2" src={logo} alt="logo" />
                    </Link>
                    <div className="botoes flex flex-col justify-evenly space-y-12 font-poppins mt-12 text-3xl text-slate-950">
                        <button className={`button ${activeTab === 'perfil' ? 'activeButton' : ''} w-80 h-14 rounded-lg hover:bg-violet-200 hoverFixed`}
                            onClick={() => handleTabClick('perfil')} data-tab="perfil">
                            <CgProfile className="inline-block mr-2 w-9 h-9" />
                            Meu Perfil
                        </button>
                        <button className={`button ${activeTab === 'portifolio' ? 'activeButton' : ''} w-80 h-14 rounded-lg hover:bg-violet-200 hoverFixed`}
                            onClick={() => handleTabClick('portifolio')}>
                            <ImProfile className="inline-block mr-2" />
                            Meu Portifólio
                        </button>
                        <button className={`button ${activeTab === 'studio' ? 'activeButton' : ''} w-80 h-14 rounded-lg hover:bg-violet-200 hoverFixed`}
                            onClick={() => handleTabClick('studio')}>
                            <GrWorkshop className="inline-block mr-2" />
                            Meu Studio
                        </button>
                    </div>
                </div>
                <div className={styles.text}>
                    {activeTab !== 'perfil' && (
                        <h1 class="text-white">Gerencie sua <span class="text-black">conta</span>.</h1>
                    )}
                    {activeTab !== 'perfil' && (
                        <div className={styles.profileInfo}>
                            <h2 class="text-5xl">Bem Vindo Renato!</h2>
                            <span class="text-4xl">Página Inicial do Perfil</span>
                            <p class="text-lg">Aqui você verá um resumo do seu perfil</p>
                        </div>
                    )}

                    <div className="text my-10 ml-16 font-poppins text-6xl">
                        {activeTab === 'perfil' && <Perfil />}
                        {activeTab === 'portifolio' && <Portifolio />}
                        {activeTab === 'studio' && <Studio />}
                    </div>
                    <div className={styles.botaoentrar}>
                        <PiUserCircleLight />
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
            );
}
            export default GerenciamentoConta;