import React from 'react';
import styles from './Perfil.module.css';

function Perfil() {
    return (
        <div>
            <div className={styles.textPerfil}>
                <h1 class="text-white">Meu<span class="text-black"> Perfil</span>.</h1>
            </div>
            <div className={styles.textEdit}>
                <h4 class="text-white">Edite seu <span class="text-black">Perfil</span>.</h4>
            </div>
            <div className={styles.nomeSobrenome}>
                <div className={styles.campo}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome" name="sobrenome" />
                </div>
            </div>
            <div className={styles.nomeSobrenome}>
                <div className={styles.campo}>
                    <label htmlFor="email">E-mail</label>
                    <input placeholder="exemplo@email.com" type="text" id="email" name="email" />
                </div>
            </div>
            <div className={styles.nomeSobrenome}>
                <div className={styles.campo}>
                    <label htmlFor="CPF">CPF</label>
                    <input placeholder="123.456.789-09" type="text" id="CPF" name="CPF" />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="celular">Celular</label>
                    <input placeholder="(DDD) Celular" type="text" id="celular" name="celular" />
                </div>
            </div>
            <div className={styles.nomeSobrenome}>
                <div className={styles.campo}>
                    <label htmlFor="senha">Senha</label>
                    <input placeholder="Mínimo 6 caracteres" type="password" id="senha" name="senha" />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="repita">Repita a senha</label>
                    <input placeholder="Mínimo 6 caracteres " type="text" id="repita" name="repita" />
                </div>
            </div>
            <button className={styles.salvar}>Salvar</button>

        </div>
    );
}

export default Perfil;