import React, { useState } from 'react';
import axios from 'axios';
import { IoImagesOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "../../pages/gerenciamento/GerenciamentoPortfolio/GerenciamentoPortfolio.module.css";
import { ToastContainer, toast } from 'react-toastify';

const tattooStyles = ["Tradicional", "Realismo", "Aquarela", "Geometrico", "Minimalista"]; // Estilos de tatuagem disponíveis

function ImageUpload() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null); // Estado para imagem ampliada
    const [stylesSelected, setStylesSelected] = useState([]); // Estado para armazenar os estilos selecionados

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles([...selectedFiles, ...files]);
        
        const imagePreviews = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...imagePreviews]);
        setStylesSelected([...stylesSelected, ""]); // Adiciona uma entrada vazia para cada nova imagem
    };

    const uploadToCloudinary = async () => {
        setLoading(true);

        const formData = new FormData();
        formData.append("upload_preset", "bwlrnidv");
        formData.append("folder", `${sessionStorage.getItem('userId')}_${sessionStorage.getItem('userName')}`);

        const uploadedImages = [];

        for (const file of selectedFiles) {
            formData.append("file", file);

            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dnd0ngogh/image/upload",
                    formData
                );
                uploadedImages.push(response.data.secure_url);
                console.log("Upload feito com sucesso:", response.data.secure_url);
                toast.success('Imagens salvas com sucesso!');
            } catch (error) {
                console.error("Erro ao fazer upload:", error);
                toast.error('Erro ao salvar imagens. Tente novamente.');
            }
        }

        setImages([...uploadedImages]);
        setSelectedFiles([]);
        setStylesSelected([]); // Limpa estilos selecionados após upload
        setLoading(false);
    };

    const handleImageClick = (image) => {
        setPreviewImage(image); // Define a imagem ampliada
    };

    const closeModal = () => {
        setPreviewImage(null); // Limpa a imagem ampliada
    };

    const handleStyleChange = (index, selectedStyle) => {
        const updatedStyles = [...stylesSelected];
        updatedStyles[index] = selectedStyle;
        setStylesSelected(updatedStyles);
    };

    return (
        <>
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
                transition="Bounce"
            />
            <div className={styles.customContainer}>
                <label htmlFor="images" className="cursor-pointer">
                    <IoImagesOutline className="text-purple-700 size-24" />
                </label>
                <Input id="images" type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
            </div>

            <div className="mt-4">
                <div className={`${styles.customContainerVisible} flex flex-wrap p-2 h-400`}>
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center mb-2 mx-3 relative w-1/5"> {/* Ajuste para 1/3 da largura */}
                            <img 
                                src={image} 
                                alt={`preview-${index}`} 
                                className="w-32 h-32 object-cover mb-1 cursor-pointer"
                                onClick={() => handleImageClick(image)} // Clique para ampliar
                            />
                            <button 
                                onClick={() => {
                                    const newImages = images.filter((_, i) => i !== index);
                                    const newFiles = selectedFiles.filter((_, i) => i !== index);
                                    const newStyles = stylesSelected.filter((_, i) => i !== index);
                                    setImages(newImages);
                                    setSelectedFiles(newFiles);
                                    setStylesSelected(newStyles);
                                    URL.revokeObjectURL(image);
                                }} 
                                className="absolute top-0 right-0 text-red-500 hover:text-red-700 w-4" // Botão de excluir
                            >
                                &times; {/* Ícone de fechar */}
                            </button>
                            <div className="mt-2">
                                <select 
                                    value={stylesSelected[index]} 
                                    onChange={(e) => handleStyleChange(index, e.target.value)} 
                                    className="border rounded-md p-1 w-32 cursor-pointer"
                                >
                                    <option value="">Estilo</option>
                                    {tattooStyles.map((style, styleIndex) => (
                                        <option key={styleIndex} value={style}>{style}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <Button onClick={uploadToCloudinary} className="w-72 h-10 bg-zinc-800 hover:bg-zinc-500 text-white text-lg rounded-md">
                    {loading ? 'Salvando...' : 'Salvar Imagens'}
                </Button>
            </div>

            {/* Modal para visualização da imagem */}
            {previewImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative bg-white rounded p-2">
                        <img 
                            src={previewImage} 
                            alt="Imagem Ampliada" 
                            className="max-w-screen-sm max-h-lvh object-contain" // Limita a largura e altura do modal
                        />
                        <button 
                            onClick={closeModal} 
                            className="absolute top-0 right-0 m-2 text-black text-2xl"
                        >
                            &times; {/* Ícone de fechar */}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageUpload;
