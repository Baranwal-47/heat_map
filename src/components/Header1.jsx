// Header1.jsx
import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("Getting location...");
  const [locationError, setLocationError] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');

  // Function to clear Google Translate cookies and reset to English
  const resetToEnglish = () => {
    // Clear Google Translate cookies
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=/auto/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Remove hash from URL
    if (window.location.hash) {
      window.history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
    
    // Force reload to original English
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Function to translate to Hindi
  const translateToHindi = () => {
    window.location.hash = '#googtrans(en|hi)';
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    
    if (lang === 'en') {
      resetToEnglish();
    } else if (lang === 'hi') {
      translateToHindi();
    }
  };

  // Initialize Google Translate (hidden)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'hidden_translate_element');
    };

    // Check current translation state
    const hash = window.location.hash;
    const cookie = document.cookie.includes('googtrans');
    
    if (hash && hash.includes('googtrans') || cookie) {
      setSelectedLang('hi');
    } else {
      setSelectedLang('en');
    }
  }, []);

  // Reverse geocode via Nominatim (unchanged)
  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      const data = await response.json();

      if (data && data.address) {
        const state = data.address.state;
        const country = data.address.country;
        if (state && country) return `${state}, ${country}`;
        if (state) return state;
        if (country) return country;
        if (data.display_name) {
          const parts = data.display_name.split(",");
          return parts.slice(-3).join(",").trim();
        }
      }
      return `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    } catch (err) {
      console.error("Error getting location name:", err);
      return `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationName = await getLocationName(latitude, longitude);
          setLocation(locationName);
          setLocationError(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setLocation("Permission denied");
              break;
            case error.POSITION_UNAVAILABLE:
              setLocation("Location unavailable");
              break;
            case error.TIMEOUT:
              setLocation("Location timeout");
              break;
            default:
              setLocation("Location error");
          }
          setLocationError(true);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 300000 }
      );
    } else {
      setLocation("Geolocation not supported");
      setLocationError(true);
    }
  }, []);

  // Utility to render NavLink with active underline
  const linkClasses = ({ isActive }) =>
    [
      "pb-1 border-b-2",
      "text-gray-700 font-medium hover:text-red-600",
      isActive ? "text-red-600 font-semibold border-red-600" : "border-transparent",
    ].join(" ");

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="logo_new.jpg" alt="Logo" className="w-21 h-21 rounded-full object-cover" />
              <div className="flex flex-col font-staatliches font-semibold tracking-wide leading-tight">
                <div className="text-[20px]">
                  <span className="text-[#004275]">MODEL </span>
                  <span className="text-red-600">HEAT</span>
                </div>
                <div className="text-[20px] text-[#004275]">ACTION PLAN FOR</div>
                <div className="text-[20px] text-green-700">PATNA</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/" end className={linkClasses}>
                Home
              </NavLink>
              <NavLink to="/analytics" className={linkClasses}>
                Analytics
              </NavLink>
              <NavLink to="/about" className={linkClasses}>
                About us
              </NavLink>
              <a
                href="http://www.bsdma.org/GetPrepared.aspx?id=1"
                className="pb-1 border-b-2 border-transparent text-gray-700 font-medium hover:text-red-600"
              >
                Get Prepared
              </a>
            </nav>

            {/* Right */}
            <div className="flex items-center space-x-4">
              {/* Simple Language Dropdown */}
              <div className="flex items-center space-x-2">
                <FiGlobe className="w-4 h-4 text-gray-600" />
                <select 
                  value={selectedLang}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 bg-white text-gray-700 focus:outline-none focus:border-gray-400"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                </select>
              </div>

              {/* Location */}
              <div className="hidden sm:flex items-center space-x-1 text-sm">
                <MdLocationOn className={`w-4 h-4 ${locationError ? "text-red-500" : "text-gray-600"}`} />
                <span className={locationError ? "text-red-500" : "text-gray-600"}>{location}</span>
              </div>

              {/* Mobile menu button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600">
                <HiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-3">
              <nav className="flex flex-col space-y-3">
                <NavLink to="/" end className={linkClasses} onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/analytics" className={linkClasses} onClick={() => setIsMenuOpen(false)}>
                  Analytics
                </NavLink>
                <NavLink to="/about" className={linkClasses} onClick={() => setIsMenuOpen(false)}>
                  About us
                </NavLink>

                {/* Mobile Language Dropdown */}
                <div className="flex items-center space-x-2 px-2">
                  <FiGlobe className="w-4 h-4 text-gray-600" />
                  <select 
                    value={selectedLang}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1 bg-white text-gray-700 focus:outline-none"
                  >
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                  </select>
                </div>

                <div className="flex items-center space-x-1 text-sm px-2 py-1">
                  <MdLocationOn className={`w-4 h-4 ${locationError ? "text-red-500" : "text-gray-600"}`} />
                  <span className={locationError ? "text-red-500" : "text-gray-600"}>{location}</span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hidden Google Translate element */}
      <div id="hidden_translate_element" style={{ display: 'none' }}></div>

      {/* Hide Google Translate bar */}
      <style jsx global>{`
        .skiptranslate > iframe {
          display: none !important;
        }
        
        body > .skiptranslate {
          display: none !important;
        }
        
        .goog-te-banner-frame {
          display: none !important;
        }
        
        body {
          top: 0px !important;
        }
      `}</style>
    </>
  );
};

export default Header1;
