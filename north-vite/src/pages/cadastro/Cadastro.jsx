import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Cadastro.modules.css';
import { useForm } from 'react-hook-form';

function Cadastro() {
  const [mostrarPrimeiraTela, setMostrarPrimeiraTela] = useState(true);
  // const [mostrarSegundaTela, setMostrarSegundaTela] = useState(false);
  const [mostrarTerceiraTela, setMostrarTerceiraTela] = useState(false);

  const avancarPrimeiraParaTerceira = () => {
    setMostrarPrimeiraTela(false);
    setMostrarTerceiraTela(true);
  };

  // const avancarSegundaParaTerceira = () => {
  //   setMostrarSegundaTela(false);
  //   setMostrarTerceiraTela(true);
  // };

  // const voltarSegundaParaPrimeira = () => {
  //   setMostrarSegundaTela(false);
  //   setMostrarPrimeiraTela(true);
  // };

  const voltarTerceiraParaPrimeira = () => {
    setMostrarTerceiraTela(false);
    setMostrarPrimeiraTela(true);
  };

  const { register, handleSubmit, setValue, watch } = useForm();

  // const checkCEP = (data) => {
  //   const cep = data.cep.replace(/\D/g, '');
  //   console.log(cep);
  //   fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
  //     console.log(data);
  //     setValue('uf', data.uf);
  //     setValue('city', data.localidade);
  //     setValue('neighborhood', data.bairro);
  //     setValue('address', data.logradouro);
  //     setValue('addressNumber', ''); // Clear address number field
  //   });
  // }

  function validaCampos() {
    const valorNome = watch("nome");
    const valorSobrenome = watch("sobrenome");
    const valorEmail = watch("email");
    const valorCpf = watch("cpf");
    const valorCelular = watch("celular");
    const valorSenha = watch("senha");
    const valorRepita = watch("repita");

    // Validação do nome
    if (valorNome.length < 3 || valorNome.length > 20) {
      alert("Nome deve ter entre 3 e 20 caracteres");
      return;
    }

    // Validação do sobrenome
    if (valorSobrenome.length < 3 || valorSobrenome.length > 30) {
      alert("Sobrenome deve ter entre 3 e 30 caracteres");
      return;
    }

    // Validação do email
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(valorEmail)) {
      alert("Email inválido");
      return;
    }

    // Validação do CPF
    const cpfRegex = /^(\d{3}\.){2}\d{3}-\d{2}$|^\d{11}$/;
    if (!cpfRegex.test(valorCpf)) {
      alert("CPF inválido");
      return;
    }


    // Validação do celular
    const celularRegex = /^\d{10,11}$/;
    if (!celularRegex.test(valorCelular)) {
      alert("Celular inválido");
      return;
    }

    // Validação da senha
    // const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    // if (!senhaRegex.test(valorSenha)) {
    //   alert("Senha deve conter no mínimo 6 caracteres, incluindo maiúsculas, minúsculas e caracteres especiais");
    //   return;
    // }

    // // Validação da repetição de senha
    // if (valorSenha !== valorRepita) {
    //   alert("As senhas não coincidem");
    //   return;
    // }

    // Se passou por todas as validações, avança para a próxima etapa
    avancarPrimeiraParaTerceira();
  }

  const [estilosSelecionados, setEstilosSelecionados] = useState([]);

  const handleEstiloChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setEstilosSelecionados([...estilosSelecionados, value]);
    } else {
      setEstilosSelecionados(estilosSelecionados.filter(item => item !== value));
    }
  };

  function handleConcluir() {
    const valorResumo = watch("resumo");

    // Validação do resumo
    if (valorResumo.length > 500) {
      alert("Resumo deve ter no máximo 500 caracteres");
      return;
    }

    console.log("Estilos selecionados:", estilosSelecionados);

    handleSubmit(onSubmit)();
  }

  const onSubmit = (data) => {
    const jsonData = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      email: data.email,
      cpf: data.cpf,
      celular: data.celular,
      senha: data.senha,
      estilosTatuagens: estilosSelecionados
    };
  
    console.log(jsonData);
  };

  return (
    <div className="inicio">
      <div>
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
                <input type="text" id="nome" name="nome" {...register("nome")} />
              </div>
              <div className="campo">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" {...register("sobrenome")} />
              </div>
            </div>
            <div className="email">
              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input placeholder="exemplo@email.com" type="text" id="email" name="email" {...register("email")} />
              </div>
            </div>
            <div className="nome-sobrenome">
              <div className="campo">
                <label htmlFor="CPF">CPF</label>
                <input placeholder="123.456.789-09" type="text" id="CPF" name="CPF" {...register("cpf")} />
              </div>
              <div className="campo">
                <label htmlFor="celular">Celular</label>
                <input placeholder="(DDD) Celular" type="text" id="celular" name="celular" {...register("celular")} />
              </div>
            </div>
            <div className="nome-sobrenome">
              <div className="campo">
                <label htmlFor="senha">Senha</label>
                <input placeholder="Mínimo 6 caracteres" type="password" id="senha" name="senha" {...register("senha")} />
              </div>
              <div className="campo">
                <label htmlFor="repita">Repita a senha</label>
                <input placeholder="Mínimo 6 caracteres " type="password" id="repita" name="repita" {...register("repita")} />
              </div>
            </div>
            <button className="avancar" onClick={validaCampos}>Avançar</button>
          </div>
        </div>

        {/* <div className={`modal-2 ${mostrarSegundaTela ? '' : 'oculto'}`}>
          {/* Conteúdo da segunda tela }
          <div className="conteudo-modal">
            <div className="barra-progresso-2">
              <div className="progresso-2"></div>
            </div>
            <span className="frase-inicial">Conte um pouco da sua história</span>
            <div className="linha-2"></div>

            <div className="input-100">
              <label htmlFor="nome-estudio">Onde você trabalha?</label>
              <input placeholder="Nome do estúdio" type="text" {...register("nomeEstudio")} />
            </div>

            <span className="endereco">Endereço do estúdio</span>

            <span className="span-cep">CEP</span>
            <div className="ipt-cep">
              <input id="cep" type="text" onBlur={handleSubmit(checkCEP)} {...register("cep")} />
              <FaSearch onClick={handleSubmit(checkCEP)} />
            </div>

            <div className="estado-cidade">
              <div className="estado">
                <label htmlFor="estado">Estado</label>
                <input id="estado" type="text" {...register("uf")} />
              </div>
              <div className="cidade">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" type="text" {...register("city")} />
              </div>
            </div>

            <div className="bairro-rua">
              <div className="bairro">
                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" type="text" {...register("neighborhood")} />
              </div>
              <div className="rua">
                <label htmlFor="rua">Rua</label>
                <input id="rua" type="text" {...register("address")} />
              </div>
            </div>

            <div className="numero-complemento">
              <div className="numero">
                <label htmlFor="numero">Número</label>
                <input id="numero" type="text" {...register("addressNumber")} />
              </div>
              <div className="complemento">
                <label htmlFor="complemento">Complemento</label>
                <input id="complemento" type="text" />
              </div>
            </div>

            <button className="avancar-2" onClick={avancarSegundaParaTerceira}>Avançar</button>
            <span id='voltar' onClick={voltarSegundaParaPrimeira}>Voltar</span>
          </div>
        </div> */}

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
                <input type="checkbox" id="oldSchool" name="oldSchool" value="Old School" onChange={handleEstiloChange} />
                <label htmlFor="oldSchool">Old School</label><br />
                <input type="checkbox" id="newSchool" name="newSchool" value="New School" onChange={handleEstiloChange}/>
                <label htmlFor="newSchool">New School</label><br />
                <input type="checkbox" id="realismo" name="realismo" value="Realismo" onChange={handleEstiloChange}/>
                <label htmlFor="realismo">Realismo</label><br />
                <input type="checkbox" id="aquarela" name="aquarela" value="Aquarela" onChange={handleEstiloChange}/>
                <label htmlFor="aquarela">Aquarela</label><br />
              </div>
              <div className="coluna">
                <input type="checkbox" id="blackwork" name="blackwork" value="Blackwork" onChange={handleEstiloChange}/>
                <label htmlFor="blackwork">Blackwork</label><br />
                <input type="checkbox" id="minimalismo" name="minimalismo" value="Minimalismo" onChange={handleEstiloChange}/>
                <label htmlFor="minimalismo">Minimalismo</label><br />
                <input type="checkbox" id="lettering" name="lettering" value="Lettering" onChange={handleEstiloChange}/>
                <label htmlFor="lettering">Lettering</label><br />
                <input type="checkbox" id="geometrico" name="geometrico" value="Geométrico" onChange={handleEstiloChange}/>
                <label htmlFor="geometrico">Geométrico</label><br />
              </div>
              <div className="coluna">
                <input type="checkbox" id="pontilhismo" name="pontilhismo" value="Pontilhismo" onChange={handleEstiloChange}/>
                <label htmlFor="pontilhismo">Pontilhismo</label><br />
                <input type="checkbox" id="neoTraditional" name="neoTraditional" value="Neo Traditional" onChange={handleEstiloChange}/>
                <label htmlFor="neoTraditional">Neo Traditional</label><br />
                <input type="checkbox" id="oriental" name="oriental" value="Oriental" onChange={handleEstiloChange}/>
                <label htmlFor="oriental">Oriental</label><br />
                <input type="checkbox" id="trashPolka" name="trashPolka" value="Trash Polka" onChange={handleEstiloChange}/>
                <label htmlFor="trashPolka">Trash Polka</label><br />
              </div>
            </div>
            <span className="msg-3-tela">Nos conte um pouco sobre você.</span>
            <span className="label-textarea">Fale aqui sobre seu resumo profissional, tempo de atuação, história de vida...</span>
            <textarea id="resumo" name="resumo" rows="6" cols="65" {...register("resumo")}></textarea>
            <button className="concluir" onClick={handleConcluir}>Concluir</button>
            <span id='voltar' onClick={voltarTerceiraParaPrimeira}>Voltar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
