// import { useState } from "react";
// import { MdPublic, MdTrendingUp, MdWarning } from "react-icons/md";
// import { GrVulnerability } from "react-icons/gr";

// const Sidebar = ({
//   mapType,
//   setMap,
//   selectedYear,
//   setSelectedYear,
//   vulnerableGroups,
//   setVulnerableGroups,
//   selectedLayer,
//   setSelectedLayer,
//   selectedBlock,
//   setSelectedBlock,
//   onBlockSelect, // New prop for handling block selection
// }) => {
//   // Local fallback state (only used if parent doesn't control these)
//   const internalVulnerableGroups = useState({
//     elderly: false,
//     children: false,
//     pregnantWomen: false,
//     outdoorWorkers: false,
//     slumDwellers: false,
//   });
//   const internalSelectedYear = useState("2025");
//   const internalSelectedBlock = useState(""); // New internal state for block

//   // Controlled or fallback state wiring
//   const groups = vulnerableGroups ?? internalVulnerableGroups[0];
//   const setGroups = setVulnerableGroups ?? internalVulnerableGroups[1];

//   // Correctly read the value part of the internal tuple
//   const [fallbackYear, setFallbackYear] = internalSelectedYear;
//   const year = typeof selectedYear === "string" ? selectedYear : fallbackYear;
//   const setYear =
//     typeof setSelectedYear === "function" ? setSelectedYear : setFallbackYear;

//   // Block selection state
//   const [fallbackBlock, setFallbackBlock] = internalSelectedBlock;
//   const block =
//     typeof selectedBlock === "string" ? selectedBlock : fallbackBlock;
//   const setBlock =
//     typeof setSelectedBlock === "function"
//       ? setSelectedBlock
//       : setFallbackBlock;

//   const years = [["2030", "2035", "2040", "2050"]];

//   const subdistricts = [
//     "Athmalgola",
//     "Bakhtiyarpur",
//     "Barh",
//     "Belchhi",
//     "Bihta",
//     "Bikram",
//     "Daniyawan",
//     "Danapur",
//     "Dhanarua",
//     "Dulhin Bazar",
//     "Fatwah",
//     "Ghoswari",
//     "Khusrupur",
//     "Maner",
//     "Masaurhi",
//     "Mokama",
//     "Naubatpur",
//     "Paliganj",
//     "Pandarak",
//     "Patna Sadar",
//     "Phulwari Sharif",
//     "Punpun",
//     "Sampatchak",
//   ];

//   const layers = [
//     "None",
//     "Roads",
//     "Water and Sewer Infrastructure",
//     "Health Facilities",
//     "Point of Interest",
//     "Settlements and Buildings",
//     "Facilities",
//     "Residential Densities",
//     "Solid Waste",
//     "BMA Buildup Area",
//     "BMA Soil Type",
//     "BMA Agriculture",
//     "Utilities and Infrastructure",
//     "Transportation",
//     "Planning",
//     "Nature",
//     "Waste Management",
//     "Elderly",
//     "Children",
//     "Pregnant Women",
//     "Outdoor Workers",
//     "Slum Dwellers",
//   ];

//   const heatRiskIcons = {
//     exposure_index: <MdPublic className="w-5 h-5 text-gray-600 mr-2" />,
//     sensitivity_index: (
//       <GrVulnerability className="w-5 h-5 text-gray-600 mr-2" />
//     ),
//     adaptive_capacity_index: (
//       <MdTrendingUp className="w-5 h-5 text-gray-600 mr-2" />
//     ),
//     vulnerability_index: <MdWarning className="w-5 h-5 text-gray-600 mr-2" />,
//   };

//   // Handle block selection change
//   const handleBlockChange = (selectedBlockName) => {
//     setBlock(selectedBlockName);
//     // Call the parent's block selection handler if provided
//     if (onBlockSelect && typeof onBlockSelect === "function") {
//       onBlockSelect(selectedBlockName);
//     }

//     // Only try to update iframe if a block is selected
//     if (selectedBlockName) {
//       setTimeout(() => {
//         const iframe = document.getElementById("heatMapIframe");
//         if (iframe) {
//           try {
//             const currentSrc = iframe.src;
//             // Remove any existing block parameter first
//             const url = new URL(currentSrc);
//             url.searchParams.delete("block");
//             url.searchParams.set("block", selectedBlockName);
//             // Add cache buster to force reload
//             url.searchParams.set("_t", Date.now());
            
//             // Force reload by setting src twice - this ensures proper reload
//             iframe.src = "about:blank";
//             setTimeout(() => {
//               iframe.src = url.toString();
//             }, 50);
            
//           } catch (error) {
//             console.error("Error updating iframe src:", error);
//           }
//         }
//       }, 100);
//     }
//   };

//   return (
//     <div
//       className="w-[25vw] min-h-screen shadow-md shadow-gray-400 font-noto-sans rounded-lg flex flex-col"
//       style={{ backgroundColor: "#FFFF" }}
//     >
//       <div className="p-4 flex-grow overflow-auto">
//         {/* Block Selection */}
//         <div className="mb-8">
//           <label className="block text-sm font-bold text-gray-600 mb-3">
//             Block
//           </label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded text-gray-600 text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
//             value={block}
//             onChange={(e) => handleBlockChange(e.target.value)}
//           >
//             <option value="">Select a block...</option>
//             {subdistricts.map((subdistrict) => (
//               <option key={subdistrict} value={subdistrict}>
//                 {subdistrict}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Layers Dropdown */}
//         <div className="mb-8">
//           <label className="block text-sm font-bold text-gray-600 mb-3">
//             Layers
//           </label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded text-gray-600 text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
//             value={selectedLayer}
//             onChange={(e) => setSelectedLayer(e.target.value)}
//           >
//             {layers.map((layer) => (
//               <option key={layer} value={layer}>
//                 {layer}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Heat Risk Indices */}
//         <div className="mb-8">
//           <label className="block text-sm font-bold text-gray-600 mb-3">
//             Heat Risk Assessment
//           </label>
//           <div className="space-y-3">
//             {[
//               { key: "exposure_index", label: "Exposure Index" },
//               { key: "sensitivity_index", label: "Sensitivity Index" },
//               {
//                 key: "adaptive_capacity_index",
//                 label: "Adaptive Capacity Index",
//               },
//               { key: "vulnerability_index", label: "Heat Vulnerability Index" },
//             ].map(({ key, label }) => (
//               <label
//                 key={key}
//                 className="flex items-center text-sm cursor-pointer text-gray-700 hover:bg-gray-50 p-2 rounded"
//               >
//                 {/* Use radio for single selection */}
//                 <input
//                   type="radio"
//                   name="heatRiskScenario"
//                   checked={(mapType ?? "vulnerability_index") === key}
//                   onChange={() => setMap(key)}
//                   className="mr-3 w-4 h-4 accent-green-700"
//                 />
//                 {heatRiskIcons[key]}
//                 {label}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* SSP Scenario (Year) */}
//         <div className="mb-6">
//           <label className="block text-sm font-bold text-gray-600 mb-3">
//             Heat Risk Scenario
//           </label>
//           <div className="space-y-2">
//             {years.map((row, rowIndex) => (
//               <div key={rowIndex} className="grid grid-cols-2 gap-2">
//                 {row.map((yearValue) => (
//                   <button
//                     key={yearValue}
//                     onClick={() => setYear(yearValue)}
//                     className={`py-3 px-2 text-md font-medium rounded-md transition-colors ${
//                       year === yearValue
//                         ? "bg-green-600 text-white"
//                         : "bg-gray-100 text-gray-600 hover:bg-gray-300"
//                     }`}
//                   >
//                     {yearValue}
//                   </button>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Run Simulation Button at the bottom */}
//       <div className="p-4">
//         <button className="w-full bg-[#E2ECF4] border border-[#007CDB] py-3 px-4 rounded text-[#007CDB] font-semibold hover:bg-blue-300 transition-colors cursor-pointer">
//           Run Simulation
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import { MdPublic, MdTrendingUp, MdWarning } from "react-icons/md";
import { GrVulnerability } from "react-icons/gr";

const Sidebar = ({
  mapType,
  setMap,
  selectedYear,
  setSelectedYear,
  vulnerableGroups,
  setVulnerableGroups,
  selectedLayer,
  setSelectedLayer,
  selectedBlock,
  setSelectedBlock,
  onBlockSelect,
}) => {
  // Local fallback state (only used if parent doesn't control these)
  const internalVulnerableGroups = useState({
    elderly: false,
    children: false,
    pregnantWomen: false,
    outdoorWorkers: false,
    slumDwellers: false,
  });
  const internalSelectedYear = useState("2025");
  const internalSelectedBlock = useState("");

  const groups = vulnerableGroups ?? internalVulnerableGroups[0];
  const setGroups = setVulnerableGroups ?? internalVulnerableGroups[1];

  const [fallbackYear, setFallbackYear] = internalSelectedYear;
  const year = typeof selectedYear === "string" ? selectedYear : fallbackYear;
  const setYear =
    typeof setSelectedYear === "function" ? setSelectedYear : setFallbackYear;

  const [fallbackBlock, setFallbackBlock] = internalSelectedBlock;
  const block =
    typeof selectedBlock === "string" ? selectedBlock : fallbackBlock;
  const setBlock =
    typeof setSelectedBlock === "function" ? setSelectedBlock : setFallbackBlock;

  const years = [["2030", "2035", "2040", "2050"]];

  const subdistricts = [
    "Athmalgola","Bakhtiyarpur","Barh","Belchhi","Bihta","Bikram","Daniyawan","Danapur",
    "Dhanarua","Dulhin Bazar","Fatwah","Ghoswari","Khusrupur","Maner","Masaurhi","Mokama",
    "Naubatpur","Paliganj","Pandarak","Patna Sadar","Phulwari Sharif","Punpun","Sampatchak",
  ];

  const layers = [
    "None","Roads","Water and Sewer Infrastructure","Health Facilities","Point of Interest",
    "Settlements and Buildings","Facilities","Residential Densities","Solid Waste","BMA Buildup Area",
    "BMA Soil Type","BMA Agriculture","Utilities and Infrastructure","Transportation","Planning",
    "Nature","Waste Management","Elderly","Children","Pregnant Women","Outdoor Workers","Slum Dwellers",
  ];

  const heatRiskIcons = {
    exposure_index: <MdPublic className="w-5 h-5 text-gray-500 mr-2" />,
    sensitivity_index: <GrVulnerability className="w-5 h-5 text-gray-500 mr-2" />,
    adaptive_capacity_index: <MdTrendingUp className="w-5 h-5 text-gray-500 mr-2" />,
    vulnerability_index: <MdWarning className="w-5 h-5 text-gray-500 mr-2" />,
  };

  const handleBlockChange = (selectedBlockName) => {
    setBlock(selectedBlockName);
    if (onBlockSelect && typeof onBlockSelect === "function") {
      onBlockSelect(selectedBlockName);
    }

    // Always update iframe - either zoom to block or reset to normal view
    setTimeout(() => {
      const iframe = document.getElementById("heatMapIframe");
      if (iframe) {
        try {
          const currentSrc = iframe.src;
          const url = new URL(currentSrc);
          
          if (selectedBlockName) {
            // Zoom to selected block
            url.searchParams.delete("block");
            url.searchParams.set("block", selectedBlockName);
          } else {
            // Reset to normal view - remove block parameter
            url.searchParams.delete("block");
          }
          
          // Add cache buster to force reload
          url.searchParams.set("_t", Date.now());
          
          // Force reload by setting src twice - this ensures proper reload
          iframe.src = "about:blank";
          setTimeout(() => {
            iframe.src = url.toString();
          }, 50);
          
        } catch (error) {
          console.error("Error updating iframe src:", error);
        }
      }
    }, 100);
  };

  // Handle Heat Risk Scenario button click - clears Heat Risk Assessment
  const handleScenarioClick = (yearValue) => {
    setYear(yearValue);
    // Clear any selected Heat Risk Assessment
    if (typeof setMap === "function") {
      setMap(null); // or setMap("") - whatever represents "no selection"
    }
  };

  // Handle Heat Risk Assessment radio click - clears Heat Risk Scenario
  const handleAssessmentClick = (assessmentKey) => {
    if (typeof setMap === "function") {
      setMap(assessmentKey);
    }
    // Clear Heat Risk Scenario selection - reset to default/initial state
    setYear(""); // or whatever your default/initial year should be
  };

  return (
    <div className="w-[25vw] min-h-screen shadow-md shadow-gray-400 font-noto-sans rounded-lg flex flex-col" style={{ backgroundColor: "#FFFF" }}>
      <div className="p-4 flex-grow overflow-auto">
        {/* Block Selection */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-600 mb-3">Block</label>
          <select
            className="w-full p-3 border border-gray-300 rounded text-gray-600 text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
            value={block}
            onChange={(e) => handleBlockChange(e.target.value)}
          >
            <option value="">Select a block...</option>
            {subdistricts.map((subdistrict) => (
              <option key={subdistrict} value={subdistrict}>
                {subdistrict}
              </option>
            ))}
          </select>
        </div>

        {/* Layers Dropdown */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-600 mb-3">Layers</label>
          <select
            className="w-full p-3 border border-gray-300 rounded text-gray-600 text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
            value={selectedLayer}
            onChange={(e) => setSelectedLayer(e.target.value)}
          >
            {layers.map((layer) => (
              <option key={layer} value={layer}>
                {layer}
              </option>
            ))}
          </select>
        </div>

        {/* Heat Risk Indices */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-600 mb-3">Heat Risk Assessment</label>
          <div className="space-y-3">
            {[
              { key: "exposure_index", label: "Exposure Index" },
              { key: "sensitivity_index", label: "Sensitivity Index" },
              { key: "adaptive_capacity_index", label: "Adaptive Capacity Index" },
              { key: "vulnerability_index", label: "Heat Vulnerability Index" },
            ].map(({ key, label }) => (
              <label
                key={key}
                className="flex items-center text-sm cursor-pointer text-gray-700 hover:bg-gray-50 p-2 rounded"
              >
                <input
                  type="radio"
                  name="heatRiskScenario"
                  checked={mapType === key}
                  onChange={() => handleAssessmentClick(key)}
                  className="mr-3 w-4 h-4 accent-green-700"
                />
                
                {heatRiskIcons[key]}
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* SSP Scenario (Year) */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-600 mb-3">Heat Risk Scenario</label>
          <div className="space-y-2">
            {years.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-2 gap-2">
                {row.map((yearValue) => (
                  <button
                    key={yearValue}
                    onClick={() => handleScenarioClick(yearValue)}
                    className={`py-3 px-2 text-md font-medium rounded-md transition-colors ${
                      year === yearValue ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    {yearValue}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Run Simulation Button at the bottom */}
      {/* <div className="p-4">
        <button className="w-full bg-[#E2ECF4] border border-[#007CDB] py-3 px-4 rounded text-[#007CDB] font-semibold hover:bg-blue-300 transition-colors cursor-pointer">
          Run Simulation
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;

