import React, { useEffect, useState } from "react";
import HeatMap from "./HeatMap";

// Import all your chart components (use correct paths)
import VulnerabilityDonutChart from "./VulnerabilityDonutChart";
import ExposureDonutChart from "./charts/ExposureDonutChart";
import SensitivityDonutChart from "./charts/SensitivityDonutChart";
import AdaptiveCapacityDonutChart from "./charts/AdaptiveCapacityDonutChart";
import AdaptiveCapacityBlocksChart from "./charts/AdaptiveCapacityBlocksChart";
import ExposureBlocksChart from "./charts/ExposureBlocksChart";
import VulnerableBlocksChart from "./charts/VulnerableBlocksChart";
import SensitivityBlocksChart from "./charts/SensitivityBlocksChart";
import AdaptiveCapacityPopulationChart from "./charts/AdaptiveCapacityPopulationChart";
import ExposurePopulationChart from "./charts/ExposurePopulationChart";
import SensitivityPopulationChart from "./charts/SensitivityPopulationChart";
import VulnerablePopulationChart from "./charts/VulnerablePopulationChart";
import Footer1 from "./Footer1";

const donutChartMap = {
  vulnerability_index: VulnerabilityDonutChart,
  exposure_index: ExposureDonutChart,
  sensitivity_index: SensitivityDonutChart,
  adaptive_capacity_index: AdaptiveCapacityDonutChart,
};

const blocksChartMap = {
  adaptive_capacity_index: AdaptiveCapacityBlocksChart,
  exposure_index: ExposureBlocksChart,
  sensitivity_index: SensitivityBlocksChart,
  vulnerability_index: VulnerableBlocksChart,
};

const populationChartMap = {
  adaptive_capacity_index: AdaptiveCapacityPopulationChart,
  exposure_index: ExposurePopulationChart,
  sensitivity_index: SensitivityPopulationChart,
  vulnerability_index: VulnerablePopulationChart,
};

const donutTitleMap = {
  vulnerability_index: "Heat Vulnerability by Area",
  exposure_index: "Exposure by Area",
  sensitivity_index: "Sensitivity by Area",
  adaptive_capacity_index: "Adaptive Capacity by Area",
};

const recommendations = ["Preparedness", "Response", "Recovery"];

export default function Dashboard({
  mapType = "vulnerability_index",
  selectedLayer,
  selectedYear,
}) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]); // Add this for forecast
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get API key from environment
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // Fetch live weather AND forecast
  useEffect(() => {
    setLoading(true);

    // Current weather (your existing code)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Patna,IN&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.main && data.weather) {
          setWeather({
            temp: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
          });
          setLastUpdated(new Date());
        }
      })
      .catch((error) => console.error("Current weather error:", error));

    // Add forecast fetch
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Patna,IN&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.list) {
          const dailyForecast = data.list
            .filter((item, index) => index % 8 === 0)
            .slice(0, 5)
            .map((item) => ({
              day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              }),
              icon: item.weather[0].icon,
              description: item.weather[0].main, // This gives you "Thunderstorm", "Rain", etc.
            }));
          setForecast(dailyForecast);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Forecast error:", error);
        setLoading(false);
      });
  }, [API_KEY]);

  const SelectedDonutChart = mapType
    ? donutChartMap[mapType]
    : donutChartMap["vulnerability_index"];
  const SelectedPopulationChart = mapType
    ? populationChartMap[mapType]
    : populationChartMap["vulnerability_index"];
  const SelectedBlocksChart = mapType
    ? blocksChartMap[mapType]
    : blocksChartMap["vulnerability_index"];

  const tempColorClass = (t) => {
    if (t == null || Number.isNaN(Number(t))) return "text-gray-500";
    const temp = Number(t);
    if (temp <= 15) return "text-blue-600";
    if (temp <= 25) return "text-sky-500";
    if (temp <= 32) return "text-orange-500";
    if (temp <= 40) return "text-red-600";
    return "text-rose-700";
  };

  return (
    <div className=" min-h-screen bg-white pt-5 w-full  shadow-md rounded-lg shadow-gray-400 font-roboto">
      {/* TOP PANEL */}

      {/* DASHBOARD GRID */}
      <div className="grid grid-cols-12 gap-5 px-5">
        {/* MAIN COLUMN */}
        <div className="col-span-9">
          <div className="flex flex-row items-center gap-6 mb-3">
            {/* left temp/card */}
            <div className="flex items-center gap-2">
              <div className="relative group flex flex-col items-center px-3 py-0.5 border-r-1 border-gray-400 bg-white cursor-pointer">
                <span
                  className={`text-lg font-bold ${tempColorClass(
                    weather?.temp
                  )}`}
                >
                  {loading ? (
                    <span className="text-xs">Loading...</span>
                  ) : (
                    weather?.temp ?? "--"
                  )}
                  °C
                </span>
                <span className="text-xs text-gray-600">Temperature</span>
                <span className="text-xs text-blue-500">
                  Relative Humidity:{" "}
                  <span className="font-bold text-yellow-500">
                    {loading ? "--" : weather?.humidity ?? "--"}%
                  </span>
                </span>
                {/* Tooltip */}
                <div
                  className="
      pointer-events-none
      absolute -top-12 left-1/2 -translate-x-1/2
      whitespace-nowrap
      rounded-md bg-blue-100 px-2 py-1 text-[10px] font-medium text-blue-700 border-0.5 border-blue-700
      opacity-0 transition-opacity duration-150
      group-hover:opacity-100
    "
                >
                  Source: Open Weather API
                  {lastUpdated && (
                    <div className="text-[9px] text-gray-500 mt-1">
                      Updated:{" "}
                      {lastUpdated.toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  )}
                  <span
                    className="absolute left-1/2 top-full -translate-x-1/2
              h-0 w-0 border-x-8 border-x-transparent border-t-8 border-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* center alert */}
            <div className="flex-1  px-5 py-0 rounded-lg flex items-center gap-0 border-none">
              {/* Add forecast display */}
              {forecast.length > 0 && (
                <div className="flex justify-between items-center w-full mx-auto rounded-lg ">
                  {forecast.map((day, index) => (
                    <div key={index} className="text-center flex-1 mx-2">
                      <div className="text-[10px] text-gray-800 mb-0.25">
                        {day.day}
                      </div>

                      {/* Weather Icon */}
                      <img
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={day.description}
                        className="mx-auto w-8 h-8 mb-0.25"
                      />

                      {/* Weather Description */}
                      <div className="text-xs text-gray-700 font-medium">
                        {day.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow ">
            {/* HEATMAP */}
            <HeatMap
              mapType={mapType}
              selectedLayer={selectedLayer}
              selectedYear={selectedYear}
            />
          </div>
        </div>

        {/* SIDEBAR COLUMN */}
        <div className="col-span-3 flex flex-col justify-between">
          {/* Vulnerability Donut/Index */}
          <div className="bg-white p-4 rounded-lg shadow-md shadow-gray-400 ">
            <h3 className=" text-center text-xs font-semibold mb-2 text-gray-800">
              {donutTitleMap[mapType]}
            </h3>
            <div className="flex justify-center">
              {SelectedDonutChart ? <SelectedDonutChart /> : null}
            </div>
          </div>
          {/* Population Chart */}
          <div className="bg-white p-3 rounded-lg shadow-md shadow-gray-400 ">
            <div>
              {SelectedPopulationChart ? <SelectedPopulationChart /> : null}
            </div>
          </div>
          {/* Blocks Chart */}
          <div className="bg-white p-3 rounded-lg shadow-md shadow-gray-400 ">
            <div>{SelectedBlocksChart ? <SelectedBlocksChart /> : null}</div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
