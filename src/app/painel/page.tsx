'use client';

import { useEffect, useState } from 'react';

//import "../styles/home.scss";



export default function PainelPage() {
const [localizacao, setLocalizacao] = useState<{ latitude: number; longitude: number } | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setErro('Geolocalização não é suportada pelo seu navegador');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocalizacao({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        setErro('Permissão negada ou erro ao obter localização');
      }
    );
  }, []);

  return (
    <div>
      <h1>Localização Atual</h1>
      {localizacao ? (
        <p>
          Latitude: {localizacao.latitude}, Longitude: {localizacao.longitude}
        </p>
      ) : erro ? (
        <p>{erro}</p>
      ) : (
        <p>Obtendo localização...</p>
      )}
    </div>
  );
}