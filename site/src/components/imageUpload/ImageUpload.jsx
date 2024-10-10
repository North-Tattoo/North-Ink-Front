import React, { useState } from 'react';
import axios from 'axios';
import { IoImagesOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "../../pages/gerenciamento/GerenciamentoPortfolio/GerenciamentoPortfolio.module.css";

function ImageUpload() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles([...selectedFiles, ...files]);
        
        const imagePreviews = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...imagePreviews]);
    };

    const uploadToCloudinary = async () => {
        setLoading(true);

        const formData = new FormData();
        formData.append("upload_preset", "bwlrnidv");
        formData.append("folder", "portfolio_images");

        const uploadedImages = [];

        for (const file of selectedFiles) {
            formData.append("file", file);

            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dnd0ngogh/image/upload",
                    formData
                );
                uploadedImages.push(response.data.secure_url);
                
            } catch (error) {
                console.error("Erro ao fazer upload:", error);
            }
        }

        setImages([...uploadedImages]);
        setSelectedFiles([]);
        setLoading(false);
    };

    return (
        <>
            <div className={styles.customContainer}>
                <label htmlFor="images" className="cursor-pointer">
                    <IoImagesOutline className="text-purple-700 size-24" />
                </label>
                <Input id="images" type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
            </div>

            <div className="mt-4">
                <Button onClick={uploadToCloudinary} className="w-48 h-10 bg-zinc-800 hover:bg-zinc-500 text-white text-lg rounded-md">
                    {loading ? 'Enviando...' : 'Enviar para Cloudinary'}
                </Button>
            </div>

            <div className="mt-24">
                <div className={styles.customContainerVisible}>
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center mb-2 mx-1">
                            <img src={image} alt={`preview-${index}`} className="w-20 h-20 object-cover mb-2" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImageUpload;
