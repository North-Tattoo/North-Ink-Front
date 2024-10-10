import React, { useState } from 'react';
import axios from 'axios';

const Pagamento = () => {
  const [qrcodeImage, setQrcodeImage] = useState('');

  const handleGenerateQRCode = async () => {
    try {
      const response = await axios.post('https://api-pagamento-n67l.onrender.com/api/generate-qrcode');
      setQrcodeImage(response.data.qrcodeImage);
    } catch (error) {
      console.error('Erro ao gerar QR code:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateQRCode}>Gerar QR Code</button>
      {qrcodeImage && <img src={qrcodeImage} alt="QR Code" />}
    </div>
  );
};

export default Pagamento;
