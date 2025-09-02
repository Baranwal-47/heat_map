import { useMemo } from "react";
import "leaflet/dist/leaflet.css";
// import compass from "../assets/compass2.png";

const HeatMap = ({
  mapType = "vulnerability_index",
  selectedLayer = "None",
  selectedYear,
}) => {
  const baseMaps = {
    exposure_index: "/exposure_index_satellite.html",
    vulnerability_index: "/vulnerability_index_satellite.html",
    sensitivity_index: "/sensitivity_index_satellite.html",
    adaptive_capacity_index: "/adaptive_capacity_satellite.html",
  };

  const roadsMaps = {
    exposure_index: "/patna_exposure_esri_sat_with_hybrid_switch.html",
    vulnerability_index: "/vulnerability_index_and_road_satellites.html",
    sensitivity_index: "/sensitivity_index_and_road_satellites.html",
    adaptive_capacity_index:
      "/adaptive_capacity_index_road_satellite_view.html",
  };

  const waterSewerMaps = {
    exposure_index: "/patna_blocks_with_water&sewer_infradetailed.html",
    vulnerability_index: "/vulnerability_index_water_sewer_infrastructure.html",
    sensitivity_index: "/sensitivity_index_water_sewer_infrastructure.html",
    adaptive_capacity_index:
      "/adaptive_capacity_index_water_sewer_infrastructure.html",
  };

  const healthFacilitiesMap = {
    exposure_index: "/exposure_index_health_facilities.html",
    vulnerability_index: "/vulnerability_index_and_health_facilities.html",
    sensitivity_index: "/sensitivity_index_and_health_facilities.html",
    adaptive_capacity_index: "/adaptive_capacity_index_and_health_facilities.html",
  };

  const HRIIndex2030 = "/vulnerability_index_v2_satellite.html";
  const HRIIndex2035 = "/vulnerability_index_2035_satellite.html";
  const HRIIndex2040 = "/vulnerability_index_2040_satellite.html";
  const HRIIndex2050 = "/vulnerability_index_2050_satellite.html";

  // Friendly titles per index type
  const mapName = {
    exposure_index: "Heat Exposure Map",
    vulnerability_index: "Heat Vulnerability Map",
    sensitivity_index: "Heat Sensitivity Map",
    adaptive_capacity_index: "Adaptive Capacity Map",
  };


  const { src, title } = useMemo(() => {
    const type = mapType in baseMaps ? mapType : "vulnerability_index";

     if (selectedYear === "2030") {
      return {
        src: HRIIndex2030,
        title: "HRI for 2030 Scenario",
      };
    }

    if (selectedYear === "2035") {
      return {
        src: HRIIndex2035,
        title: "HRI for 2035 Scenario",
      };
    }

    if (selectedYear == "2040") {
      return {
        src: HRIIndex2040,
        title: "HRI for 2040 Scenario",
      };
    }

    if (selectedYear == "2050") {
      return {
        src: HRIIndex2050,
        title: "HRI for 2050 Scenario",
      };
    }
    
    const isProjectionYear = ["2030", "2035", "2040", "2050"].includes(String(selectedYear));



  const forceBaseMapForProjection =
    isProjectionYear &&
    ["exposure_index", "sensitivity_index", "adaptive_capacity_index"].includes(type);

    // Selected layer Routing
    if (selectedLayer === "Roads") {
      return {
        src: roadsMaps[type] || baseMaps[type],
        title:  (mapName[type] || "Heat Map"),
      };
    }

    if (selectedLayer === "Water and Sewer Infrastructure") {
      return {
        src: waterSewerMaps[type] || baseMaps[type],
        title:  (mapName[type] || "Heat Map"),
      };
    }

    if (selectedLayer === "Health Facilities") {
      return {
        src: healthFacilitiesMap[type] || baseMaps[type],
        title: (mapName[type] || "Heat Map"),
      };
    }

      if (forceBaseMapForProjection) {
    return {
      src: baseMaps[type],
      title: mapName[type] || "Heat Map",
    };
  }

   

    // Default to the base heat index map
    return {
      src: baseMaps[type] || baseMaps.vulnerability_index,
      title: mapName[type] || "Heat Vulnerability Map",
    };
  }, [mapType, selectedLayer, selectedYear]);

  const isProjectionYear = ["2030", "2035", "2040", "2050"].includes(
    String(selectedYear)
  );
  const legendLabels = isProjectionYear
    ? { high: "Very High, Urban", mid: "High, Peri-Urban", low: "Moderate, Rural" }
    : { high: "High", mid: "Medium", low: "Low" };

    const HIDE_DENSITY_YEARS = new Set([2030, 2035, 2040, 2050]);

  return (
    <div className="bg-#F9F6EE pt-0 rounded-lg shadow-md shadow-gray-400 h-full w-full font-roboto">
      <div className="relative h-120 rounded-lg overflow-hidden border border-gray-200">
        <iframe
          id="heatMapIframe"
          src={src}
          title="Interactive Heat Map"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>

      <div className="bg-white px-6 py-4 rounded-md">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-8">
            {/* Title + Legend */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

                {/* Legend */}
                <div className="flex flex-row text-xs space-x-2 px-2">
                  <div className="flex flex-col items-center space-y-1">
                    <span className="font-medium">{legendLabels.high}</span>
                    <div
                      className={`w-6 h-6 rounded-full ${
                        mapType === "adaptive_capacity_index"
                          ? "bg-[#a1d885]"
                          : "bg-[#f26963]"
                      }`}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="font-medium">{legendLabels.mid}</span>
                    <div
                      className={`w-6 h-6 rounded-full ${
                        mapType === "adaptive_capacity_index"
                          ? "bg-[#d6f5be]"
                          : "bg-[#f3c26e]"
                      }`}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="font-medium ">{legendLabels.low}</span>
                    <div
                      className={`w-6 h-6 rounded-full shadow-sm ${
                        isProjectionYear
                          ? "bg-[#fce99f]"
                          : mapType === "adaptive_capacity_index"
                          ? "bg-[#b7c6b0]"
                          : mapType === "vulnerability_index"
                          ? "bg-[#f1c2aa]"
                          : "bg-[#ecc1aa]"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Population Density (static sample) */}
              {/* {!shouldHidePopulationDensity && ( */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">
                  Population Density (2025) / km²:
                </p>
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full" />
                    <span className="text-sm text-gray-600">≤ 929</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.75 h-1.75 bg-red-900 rounded-full" />
                    <span className="text-sm text-gray-600">≤ 1683</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-900 rounded-full" />
                    <span className="text-sm text-gray-600">≤ 2299</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-red-900 rounded-full" />
                    <span className="text-sm text-gray-600">≤ 4131</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-900 rounded-full" />
                    <span className="text-sm text-gray-600">≤ 16327</span>
                  </span>
                </div>
              </div>
              {/* )} */}

              <div className="border-b border-gray-300 mb-6" />

              {/* Advisory snippet */}
              <div className="flex items-start gap-4">
                <div className="bg-[#FFFCE8] border-2 border-[#FFEF10] rounded-lg p-3 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#FFFCE8] rounded">
                    <svg
                      className="w-5 h-5 text-yellow-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">Heatwave</div>
                    <div className="text-gray-700">Advisories </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    <a href="http://www.bsdma.org/GetPrepared.aspx?id=1">

                    Heatwave Advisories devised by BSDMA
                    </a>
                    
                  </h3>
                  <p className="text-sm text-gray-700">
                    Email: info@bsdma.org
                    Helpline: 0612-2547232
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar (Recommendations) */}
          <div className=" bg-white hover:bg-[#E2ECF4] duration-100 rounded-lg shadow-sm p-4 min-w-[280px]">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
              Recommendations
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="bg-white hover:bg-gray-200 shadow-sm shadow-gray-600 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                Preparedness
              </button>
              <button className="bg-white hover:bg-gray-200 shadow-sm shadow-gray-600 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                Response
              </button>
            </div>
            <button className="w-full bg-white hover:bg-gray-200 shadow-sm shadow-gray-600 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
              Recovery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
