import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Cadastro.modules.css';
import { useForm } from 'react-hook-form';

function Cadastro() {
    const [mostrarPrimeiraTela, setMostrarPrimeiraTela] = useState(true);
    const [mostrarSegundaTela, setMostrarSegundaTela] = useState(false);
    const [mostrarTerceiraTela, setMostrarTerceiraTela] = useState(false);
  
    const avancarPrimeiraParaSegunda = () => {
      setMostrarPrimeiraTela(false);
      setMostrarSegundaTela(true);
    };
  
    const avancarSegundaParaTerceira = () => {
      setMostrarSegundaTela(false);
      setMostrarTerceiraTela(true);
    };
  
    const voltarSegundaParaPrimeira = () => {
      setMostrarSegundaTela(false);
      setMostrarPrimeiraTela(true);
    };
  
    const voltarTerceiraParaSegunda = () => {
      setMostrarTerceiraTela(false);
      setMostrarSegundaTela(true);
    };
  
    const {register, setValue, setFocus } = useForm();
  
    const checkCEP = (e) => {
      if (e && e.target && e.target.value) {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
          console.log(data);
          setValue('address', data.logradouro);
          setValue('neighborhood', data.bairro);
          setValue('city', data.localidade);
          setValue('uf', data.uf);
          setFocus('addressNumber');
        });
      } else {
        console.log('não funfou');
        console.log(e);
      }
    }
  
    return (
      <div className="inicio">
        <div className={`modal ${mostrarPrimeiraTela ? '' : 'oculto'}`}>
          {/* Conteúdo da primeira tela */}
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
                <label htmlFor="CPF">CPF</label>
                <input placeholder="123.456.789-09" type="text" id="CPF" name="CPF" />
              </div>
              <div className="campo">
                <label htmlFor="celular">Celular</label>
                <input placeholder="(DDD) Celular" type="text" id="celular" name="celular" />
              </div>
            </div>
            <div className="nome-sobrenome">
              <div className="campo">
                <label htmlFor="senha">Senha</label>
                <input placeholder="Mínimo 6 caracteres" type="password" id="senha" name="senha" />
              </div>
              <div className="campo">
                <label htmlFor="repita">Repita a senha</label>
                <input placeholder="Mínimo 6 caracteres " type="text" id="repita" name="repita" />
              </div>
            </div>
            <button className="avancar" onClick={avancarPrimeiraParaSegunda}>Avançar</button>
          </div>
        </div>
  
        <div className={`modal-2 ${mostrarSegundaTela ? '' : 'oculto'}`}>
          {/* Conteúdo da segunda tela */}
          <div className="conteudo-modal">
            <div className="barra-progresso-2">
              <div className="progresso-2"></div>
            </div>
            <span className="frase-inicial">Conte um pouco da sua história</span>
            <div className="linha-2"></div>
  
            <div className="input-100">
              <label htmlFor="nome-estudio">Onde você trabalha?</label>
              <input placeholder="Nome do estúdio" type="text" />
            </div>
  
            <span className="endereco">Endereço do estúdio</span>
  
            <span className="span-cep">CEP</span>
            <div className="ipt-cep">
              <input id="cep" type="text"  onBlur={checkCEP}/>
              <FaSearch onClick={(e) => checkCEP(e)} />
            </div>
  
            <div className="estado-cidade">
              <div className="estado">
                <label htmlFor="estado">Estado</label>
                <input id="estado" type="text" {...register("uf")} />
              </div>
              <div className="cidade">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" type="text" {...register("city")}/>
              </div>
            </div>
  
            <div className="bairro-rua">
              <div className="bairro">
                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" type="text" {...register("neighborhood")}/>
              </div>
              <div className="rua">
                <label htmlFor="rua">Rua</label>
                <input id="rua" type="text" {...register("address")}/>
              </div>
            </div>
  
            <div className="numero-complemento">
              <div className="numero">
                <label htmlFor="numero">Número</label>
                <input id="numero" type="text" {...register("addressNumber")}/>
              </div>
              <div className="complemento">
                <label htmlFor="complemento">Complemento</label>
                <input id="complemento" type="text" />
              </div>
            </div>
  
            <button className="avancar-2" onClick={avancarSegundaParaTerceira}>Avançar</button>
            <span id='voltar' onClick={voltarSegundaParaPrimeira}>Voltar</span>
          </div>
        </div>
  
        <div className={`modal ${mostrarTerceiraTela ? '' : 'oculto'}`}>
          {/* Conteúdo da terceira tela */}
          <div className="conteudo-modal">
            <div className="barra-progresso">
              <div className="progresso-3"></div>
            </div>
            <span className="frase-inicial">Para as pessoas te conhecerem</span>
            <div className="linha"></div>
            <span className="msg-3-tela">Quais seus estilos preferidos para trabalhar?</span>
            <div className="opcoes">
              <div className="coluna">
                <input type="checkbox" id="oldSchool" name="oldSchool" value="Old School" />
                <label htmlFor="oldSchool">Old School</label><br />
                <input type="checkbox" id="newSchool" name="newSchool" value="New School" />
                <label htmlFor="newSchool">New School</label><br />
                <input type="checkbox" id="realismo" name="realismo" value="Realismo" />
                <label htmlFor="realismo">Realismo</label><br />
                <input type="checkbox" id="aquarela" name="aquarela" value="Aquarela" />
                <label htmlFor="aquarela">Aquarela</label><br />
              </div>
              <div className="coluna">
                <input type="checkbox" id="blackwork" name="blackwork" value="Blackwork" />
                <label htmlFor="blackwork">Blackwork</label><br />
                <input type="checkbox" id="minimalismo" name="minimalismo" value="Minimalismo" />
                <label htmlFor="minimalismo">Minimalismo</label><br />
                <input type="checkbox" id="lettering" name="lettering" value="Lettering" />
                <label htmlFor="lettering">Lettering</label><br />
                <input type="checkbox" id="geometrico" name="geometrico" value="Geométrico" />
                <label htmlFor="geometrico">Geométrico</label><br />
              </div>
              <div className="coluna">
                <input type="checkbox" id="pontilhismo" name="pontilhismo" value="Pontilhismo" />
                <label htmlFor="pontilhismo">Pontilhismo</label><br />
                <input type="checkbox" id="neoTraditional" name="neoTraditional" value="Neo Traditional" />
                <label htmlFor="neoTraditional">Neo Traditional</label><br />
                <input type="checkbox" id="oriental" name="oriental" value="Oriental" />
                <label htmlFor="oriental">Oriental</label><br />
                <input type="checkbox" id="trashPolka" name="trashPolka" value="Trash Polka" />
                <label htmlFor="trashPolka">Trash Polka</label><br />
              </div>
            </div>
            <span className="msg-3-tela">Nos conte um pouco sobre você.</span>
            <span className="label-textarea">Fale aqui sobre seu resumo profissional, tempo de atuação, história de vida...</span>
            <textarea id="resumo" name="resumo" rows="6" cols="65"></textarea>
            <button className="concluir" onClick={() => console.log("Concluído")}>Concluir</button>
            <span id='voltar' onClick={voltarTerceiraParaSegunda}>Voltar</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cadastro;
  