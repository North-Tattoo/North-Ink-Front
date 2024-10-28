import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import api from '../../api';
import 'leaflet/dist/leaflet.css';


const LeafletMapComponent = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        // Substitua pelo token do usuário
        // const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3BoaWEuYW1hcmFsMjgwNkBnbWFpbC5jb20iLCJpYXQiOjE3MjQ4ODM1NDcsImV4cCI6MTcyODQ4MzU0N30.5QxsfLWvm3hfIOjI1KvOWrjpMuVr6Bwed1jQ1ksyENmwaLYbJa7GfaTsyo9gs71_1uKz5eR3bLACX4VFOxgXzw";

        // Configurar o cabeçalho com o token do usuário
        const response = await api.get('/api/enderecos');

        const addressData = response.data[0];
        const fullAddress = `${addressData.rua}, ${addressData.cidade}, ${addressData.estado}`;

        console.log(fullAddress);

        // Geocodificar o endereço completo usando a API Nominatim
        const geocodeResponse = await api.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`
        );

        console.log("resposta da api:", geocodeResponse.data);

        if (geocodeResponse.data.length > 0) {
          const { lat, lon } = geocodeResponse.data[0];
          setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
        } else {
          console.error("Nenhum resultado encontrado para o endereço.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter o endereço ou coordenadas:", error);
      }
    };

    fetchAddress();
  }, []);

  if (loading) return <div>Carregando mapa...</div>;

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={13}
      style={{ height: "300px", width: "330px", borderRadius: "25px", // Adiciona border-radius
        overflow: "hidden"  }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coordinates.lat, coordinates.lng]} />
    </MapContainer>
  );
};

export default LeafletMapComponent;
