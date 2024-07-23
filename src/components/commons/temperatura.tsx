import "../../styles/_temperaturacard.scss"; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSnowflake, FaCloudSun, FaSun } from 'react-icons/fa';

function TemperaturaCard() {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    }, (error) => {
      console.error("Erro ao obter localização: ", error);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const fetchTemperature = async () => {
      if (location.lat !== 0 && location.lon !== 0 && apiKey) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`
          );
          setTemperature(response.data.main.temp);
        } catch (error) {
          console.error("Erro ao obter temperatura: ", error);
          setLoading(false);
        }
      } else {
        console.error("Localização ou API Key não configurados corretamente.");
        setLoading(false);
      }
    };

    fetchTemperature();
  }, [location, apiKey]);

  const getIconForTemperature = (temp: number) => {
    if (temp <= 17) return <FaSnowflake size={50}/>; // Frio
    if (temp <= 25) return <FaCloudSun size={50} />; // Normal
    return <FaSun size={50}/>; // Calor
  };

  const getMessageForTemperature = (temp: number) => {
    if (temp <= 17) return "Agora está frio.";
    if (temp <= 25) return "Temperatura está agradável.";
    return "Agora está fazendo calor.";
  };

  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return new Date().toLocaleDateString('pt-BR', options);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="item temperaturacard"> 
      {temperature !== null ? (
        <div className="temperatura-container">
          <div className="esquerda">
            <p>{getMessageForTemperature(temperature)}</p>
            {getIconForTemperature(temperature)}
          </div>
          <div className="divisoria"></div>
          <div className="direita"> 
            <h3>São Paulo - SP</h3>
            <h1>{temperature}°C</h1>
            <h3>Hoje é {formatDate()}</h3>
          </div> 
        </div>
      ) : (
        <h1>Não foi possível obter a temperatura</h1>
      )}
    </div>
  );
}

export default TemperaturaCard;
