// import React, { useState } from "react";
// import styles from "./GerenciamentoConta.module.css";
// import logo from "../../utils/assets/logo-preta.png";
// import { Link } from 'react-router-dom';
// import { PiUserCircleLight } from "react-icons/pi";
// import Perfil from '@/components/perfil/Perfil';

// function GerenciamentoConta() {
//     const [activeTab, setActiveTab] = useState(''); // Initial active tab

//     const handleTabClick = (tabName) => {
//         setActiveTab(tabName);
//     };
//     return (
//         <section>
//             <div className={styles.container}>
//                 <div className={styles.menu}>
//                     <Link to='/'>
//                         <img className={styles.logo} src={logo} alt="logo" />
//                     </Link>
//                     <div className={styles.botoes}>
//                         <button className={activeTab === 'perfil' ? styles.activeButton : styles.button}
//                             onClick={() => handleTabClick('perfil')}>Meu Perfil</button>
//                         <button onClick={() => setActiveTab('portfolio')}>Meu Portfólio</button>
//                         <button onClick={() => setActiveTab('studio')}>Meu Studio</button>
//                     </div>
//                 </div>

//                 <div className={styles.text}>
//                     {activeTab !== 'perfil' && (
//                         <h1 class="text-white">Gerencie sua <span class="text-black">conta</span>.</h1>
//                     )}
//                     {activeTab !== 'perfil' && (
//                     <div className={styles.profileInfo}>
//                         <h2 class="text-5xl">Bem Vindo Renato!</h2>
//                         <span class="text-4xl">Página Inicial do Perfil</span>
//                         <p class="text-lg">Aqui você verá um resumo do seu perfil</p>
//                     </div>
//                     )}

//                     {activeTab === 'perfil' && <Perfil/>}
//                 </div>
//                 <div className={styles["botao-entrar"]}>
//                     <PiUserCircleLight />
//                     <Link to='/cadastro'>Sou um Tatuador</Link>
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default GerenciamentoConta;