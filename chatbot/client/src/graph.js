import React, { useState } from "react";
import ReactFlowRenderer from './graphs/ReactFlowRenderer';
import {nodes as generalnodes, edges as generaledges} from './graphs/general_elements';

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    window.location.href = option.url; // redirect to the selected option's URL
  };

  return (
    <div>
      <select value={selectedOption} onChange={(e) => handleOptionSelect(options.find(option => option.label === e.target.value))}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};


export default Dropdown;

