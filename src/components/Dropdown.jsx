import React from "react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const options = [
    "All",
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const [selectedRegion, setSelectedRegion] = useState("Filter By Region");

  return (
    <div
      onClick={() => {
        setToggleDropdown(!toggleDropdown);
      }}
      className="d-flex align-items-center rounded-1 p-3 gap-5 shadow bg-elements custom-text-color position-relative dropdown-display"
    >
      <p className="mb-0">{selectedRegion}</p>
      <RiArrowDownSLine
        style={{
          transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
          transition: "0.3s ease-in-out",
        }}
      />
      {toggleDropdown && (
        <ul className="position-absolute dropdown-options bg-elements px-0 py-3 rounded-2 shadow">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setSelectedRegion(
                    option === "All" ? "Filter By Region" : option
                  );
                  filterByRegion(option);
                }}
                className="px-3 "
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
