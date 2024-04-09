import React from 'react';
import styles from '../navbar/NavBar.module.css';
import { Button } from '../ui/button';

const NavBar = ({ logoInicio }) => {
    return (
        <nav className={styles["navbar"]}>
                <img src={logoInicio} className="ml-32 size-20" alt="Logo Início" />

                <Button className={styles['logo-fim']}>Entrar</Button>

                </nav>
            );
};
export default NavBar;
