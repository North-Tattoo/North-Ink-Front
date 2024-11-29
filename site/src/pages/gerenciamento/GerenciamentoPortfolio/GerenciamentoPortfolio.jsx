import React, { useState, useEffect } from "react";
import styles from "./GerenciamentoPortfolio.module.css";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import EstilosComponent from "@/components/estilosComponent/EstilosComponent";
import { FaSquareInstagram } from "react-icons/fa6";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { IoPersonAddSharp } from "react-icons/io5";
import ImageUpload from "@/components/imageUpload/ImageUpload";
import api from "../../../api";

function Portfolio() {
  const [precoMin, setPrecoMin] = useState("");
  const [anosExperiencia, setAnosExperiencia] = useState("");
  const [resumo, setResumo] = useState("");
  const [instagram, setInstagram] = useState("");
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [imagemPerfil, setImagemPerfil] = useState(null);
  const [perfilImageFile, setPerfilImageFile] = useState(null); // Para armazenar a imagem do perfil
  const [estilosSelecionados, setEstilosSelecionados] = useState([]); // Estado para armazenar os estilos selecionados

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    setUserId(storedUserId);
    const storedUserName = sessionStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemPerfil(reader.result);
        setPerfilImageFile(file); // Armazena o arquivo da imagem do perfil
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para lidar com a mudança dos estilos selecionados
  const handleEstilosChange = (newEstilos) => {
    setEstilosSelecionados(newEstilos);
  };

  const handleSave = () => {
    const portfolioData = {
      id: userId,
      precoMin: parseFloat(precoMin),
      anosExperiencia: anosExperiencia,
      resumo: resumo,
      instagram: instagram,
      estilos: estilosSelecionados, // Inclui os estilos selecionados
    };

    console.log("portfolioData", portfolioData);

    if (userId) {
      // Primeiro, atualiza o portfólio
      api
        .put(`api/usuarios/portfolioAtualizar/${userId}`, portfolioData)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Portfólio atualizado com sucesso!");
            console.log("passou");
            console.log(response.data);

            // Após atualizar o portfólio, faça o upload da imagem de perfil
            if (perfilImageFile) {
              console.log("perfilImageFile:", perfilImageFile);
              const formData = new FormData();
              const folderPath = `${userId}_${userName}/profile_picture`; // Define o caminho da pasta
              formData.append("file", perfilImageFile); // O nome do campo deve ser "file"
              formData.append("upload_preset", "a4o1v5pq"); // Altere para o seu upload preset
              formData.append("folder", folderPath); // Define a pasta onde a imagem será armazenada

              axios
                .post(`https://api.cloudinary.com/v1_1/dpacgzko0/image/upload`, formData)
                .then((res) => {
                  if (res.status === 200) {
                    // toast.success("Imagem de perfil atualizada com sucesso!");
                    console.log("Imagem de perfil atualizada com sucesso!");
                  }
                })
                .catch((error) => {
                  toast.error("Erro ao atualizar a imagem de perfil.");
                  console.error("Upload error:", error);
                });
            }
          }
        })
        .catch((error) => {
          toast.error("Erro ao atualizar portfólio. Por favor, tente novamente.");
          console.error("Portfolio update error:", error);
        });
    } else {
      toast.error("Erro: ID do usuário não encontrado.");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <ToastContainer
          className="toastContainer"
          position="top-right"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h1 className={`${styles["tituloPortifolio"]} font-poppins`}>
          Crie seu Portfólio.
        </h1>
        <br />
        <h3 className={`${styles["subtituloPortifolio"]} font-poppins`}>
          Sua pré-visualização de portfólio, edite crie e se inspire.
        </h3>
        <h4 className={`${styles["subtituloIIPortifolio"]} font-poppins`}>
          Edite o seu portfólio.
        </h4>
        <div className="flex space-x-8">
          <div className="flex">
            <div className="flex flex-col items-start bg-zinc-200 w-88 h-auto p-4 rounded-lg shadow-lg overflow-hidden border border-zinc-600">
              <div className="flex items-center mb-4">
                <div>
                  <div
                    className={styles.fotoPerfilPortifolio}
                    onClick={() => document.getElementById("profile-image").click()}
                  >
                    {imagemPerfil ? (
                      <img src={imagemPerfil} alt="Imagem de Perfil" />
                    ) : (
                      <IoPersonAddSharp style={{ color: "#9333EA" }} size={50} />
                    )}
                  </div>
                  <input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.hiddenInput}
                  />
                </div>
                <div className="ml-8">
                  <h2 className="text-lg font-bold font-poppins text-zinc-800">
                    {userName}
                  </h2>
                </div>
              </div>
              <div className="flex-col ml-2">
                <div className={styles.precoPortifolio}>
                  <p className={styles.tituloValorMin}>Valor Mínimo</p>
                  <input
                    placeholder="R$ 00,00"
                    value={precoMin}
                    onChange={(e) => setPrecoMin(e.target.value)}
                  />
                </div>

                <p className={styles.tituloValorMin}>Tempo de Experiência</p>
                <select
                  className={styles.caixaSelecaoEstilosPortifolio}
                  value={anosExperiencia}
                  onChange={(e) => setAnosExperiencia(e.target.value)}
                >
                  <option value=""></option>
                  <option value="menos-de-1-ano">Menos de 1 ano</option>
                  <option value="1-3-anos">1 a 3 anos</option>
                  <option value="3-5-anos">3 a 5 anos</option>
                  <option value="5-10-anos">5 a 10 anos</option>
                  <option value="mais-de-10-anos">Mais de 10 anos</option>
                </select>

                <p className={styles.tituloValorMin}>Biografia</p>
                <textarea
                  placeholder="Escreva sua bio"
                  className="textareaPortifolio"
                  rows="3"
                  value={resumo}
                  onChange={(e) => setResumo(e.target.value)}
                ></textarea>

                {/* Passando a função handleEstilosChange para EstilosComponent */}
                <EstilosComponent onChange={handleEstilosChange} />
                
                <div className={styles.userInstaPortifolio}>
                  <div className={styles.userInstaTitulo}>
                    <p className={styles.tituloValorMin}>Instagram</p>
                    <FaSquareInstagram
                      style={{
                        color: "#9333EA",
                        marginLeft: "10px",
                        marginTop: "20px",
                      }}
                      size={20}
                    />
                  </div>
                  <input
                    placeholder="www.instagram.com/"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-medium font-poppins text-zinc-600">
              Anexe fotos para completar seu portfólio.
            </h2>
            <ImageUpload />
          </div>
        </div>
        <button className={styles.botaoPortifolioSalvar} onClick={handleSave}>
          Salvar
        </button>
      </section>
    </div>
  );
}

export default Portfolio;
