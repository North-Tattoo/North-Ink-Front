import { ContextMenuTrigger, ContextMenuContent, ContextMenu } from "@/components/ui/context-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        if (imageFile) {
            setSelectedImage(URL.createObjectURL(imageFile));
        }
    };

    const handleUpload = () => {
        // Lógica para enviar a imagem para o backend usando Axios
        // Exemplo: axios.post('/upload', { image: selectedImage });
    };

    return (
        <>
            <div className="text-white border-dashed border-2 border-gray-300 p-8 rounded-lg w-96 h-52 flex flex-col items-center justify-center hover:border-gray-400 hover:shadow-md transition duration-300" >
                <Label htmlFor="images" className="my-4 font-semibold shadow-md">Clique aqui para fazer upload de suas imagens:</Label>
                <Input id="images" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                {selectedImage && <img src={selectedImage} alt="Uploaded Image" style={{ maxWidth: '100px' }} />}

            </div>

            <Button onClick={handleUpload} className=" mt-18 justify-center w-48 rounded-sm bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4">Criar Galeria</Button>

        </>);
}

export default ImageUpload;