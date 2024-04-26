import React from "react";
import styles from "./NotFound.module.css";
import logo from "../../utils/assets/logo-branca.png";
import imgNotFound from "../../utils/assets/notFound.png"
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section>
            <div className={styles.fundo}>
                <div className={styles.navBar}>
                    <Link to='/'>
                        <img className={styles.logo} src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={styles.fraseImage}>
                    <div className={styles.text}>
                        <h1 class="text-7xl text-white">Ops!</h1>
                        <h4 class="text-4xl text-white">Desculpe não
                            <h4>encontramos essa</h4>
                            <span class="text-black">página</span>.</h4>
                            <Link to='/'>
                        <button className={styles.botao}>Ir para o site</button>
                        </Link>
                    </div>
                    <img className={styles.image} src={imgNotFound} alt="404" />
                </div>
            </div>
        </section>
    );
}
export default NotFound;