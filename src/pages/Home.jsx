import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [weather, setWeather] = useState(null);

  const API_KEY = "41d1143e6586d85d79fe4dfe19372261";

  async function fetchWeather(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("City not found! Please check the name and try again.");
    }
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">WeatherNow 🌤️</h1>
        <p className="text-gray-600">Live Weather Forecast App</p>
      </header>

      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
}
