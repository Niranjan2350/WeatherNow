export default function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <div className="text-center text-gray-500">
        🔍 Search a city to view weather details
      </div>
    );
  }

  const { name, main, weather: weatherDetails, wind } = weather;
  const icon = weatherDetails[0].icon;

  return (
    <div className="text-center bg-blue-100 p-5 rounded-lg">
      <h2 className="text-2xl font-semibold text-blue-800 mb-2">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather icon"
        className="mx-auto"
      />
      <p className="text-xl font-bold">{Math.round(main.temp)}°C</p>
      <p className="italic capitalize text-gray-700">
        {weatherDetails[0].description}
      </p>
      <p className="text-gray-600">Humidity: {main.humidity}%</p>
      <p className="text-gray-600">Wind: {wind.speed} m/s</p>
    </div>
  );
}
