import React from 'react';
import './Cadastro.css';

function Cadastro() {
  
  const avancar = () => {
    const inicio = document.querySelector(".inicio");
    inicio.innerHTML = `
      <div class="inicio">
        <div class="modal-2">
          <div class="conteudo-modal">
            <div class="barra-progresso-2">
              <div class="progresso-2"></div>
            </div>
            <span class="frase-inicial">Conte um pouco da sua história</span>
            <div class="linha"></div>

            <div class="input-100">
              <label htmlFor="nome-estudio">Onde você trabalha?</label>
              <input placeholder="Nome do estúdio" type="text">
            </div>

            <span class="endereco">Endereço do estúdio</span>

            <span class="span-cep">CEP</span>
            <div class="ipt-cep">
              <input id="cep" type="text">
              <ion-icon name="search-outline"></ion-icon>
            </div>

            <div class="estado-cidade">
              <div class="estado">
                <label htmlFor="estado">Estado</label>
                <input id="estado" type="text">
              </div>
              <div class="cidade">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" type="text">
              </div>
            </div>

            <div class="bairro-rua">
              <div class="bairro">
                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" type="text">
              </div>
              <div class="rua">
                <label htmlFor="rua">Rua</label>
                <input id="rua" type="text">
              </div>
            </div>
            
            <div class="numero-complemento">
              <div class="numero">
                <label htmlFor="numero">Número</label>
                <input id="numero" type="text">
              </div>
              <div class="complemento">
                <label htmlFor="complemento">Complemento</label>
                <input id="complemento" type="text">
              </div>
            </div>

            <button class="avancar-2">Avançar</button>
            <a id="voltar" href="#">Voltar</a>
          </div>
        </div>
      </div>`;
  };

  return (
    <div className="inicio">
      <div className="modal">
        <div className="conteudo-modal">
          <div className="barra-progresso">
            <div className="progresso"></div>
          </div>
          <span className="frase-inicial">Se torne um tatuador parceiro</span>
          <div className="linha"></div>
          <div className="nome-sobrenome">
            <div className="campo">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div className="campo">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input type="text" id="sobrenome" name="sobrenome" />
            </div>
          </div>
          <div className="email">
            <div className="campo">
              <label htmlFor="email">E-mail</label>
              <input placeholder="exemplo@email.com" type="text" id="email" name="email" />
            </div>
          </div>
          <div className="nome-sobrenome">
            <div className="campo">
              <label htmlFor="senha">Senha</label>
              <input placeholder="Mínimo 6 caracteres" type="password" id="senha" name="senha" />
            </div>
            <div className="campo">
              <label htmlFor="telefone">Telefone</label>
              <input placeholder="(DDD) Telefone" type="text" id="telefone" name="telefone" />
            </div>
          </div>
          <button className="avancar" onClick={avancar}>Avançar</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
