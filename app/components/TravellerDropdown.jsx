import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TravellerDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Number of Travellers");

  const options = ["0-5", "5-10", "10-15", "More"];

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex-1">
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center border border-zinc-300 rounded-sm px-3 py-2 text-zinc-700 bg-white focus:outline-none focus:border-zinc-600"
      >
        <span
          className={`${
            selected === "Number of Travellers"
              ? "text-zinc-500"
              : "text-zinc-800"
          }`}
        >
          {selected}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-zinc-300 rounded-sm shadow-md text-zinc-700">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className="px-3 py-2 hover:bg-zinc-100 cursor-pointer transition"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
