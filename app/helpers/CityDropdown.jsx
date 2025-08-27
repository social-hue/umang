"use client";

import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { cities } from "../StaticData/Cities";

export default function CityDropdown() {
  const [selectedCity, setSelectedCity] = useState("City");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setSearchTerm("");
    setIsOpen(false);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block text-left sm:w-[150px] w-[110px]"
    >
      {/* Dropdown trigger */}
      <span
        onClick={toggleDropdown}
        className="flex items-center justify-between gap-2 w-full bg-white rounded-[10px] px-4 py-3 uppercase text-[#313030] heading_font lg:text-[20px] md:text-[18px]  text-[12px] cursor-pointer"
      >
        <span className="truncate">{selectedCity}</span>
        <FaAngleDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </span>

      {/* Dropdown list */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-72 overflow-y-auto">
          {/* Search input */}
          <div className="p-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search city..."
              className="w-full px-3 text-black py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <div
                key={city}
                onClick={() => selectCity(city)}
                className="px-4 py-2 text-[#313030] hover:bg-gray-100 cursor-pointer uppercase text-sm"
              >
                {city}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 text-sm">
              No cities found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
