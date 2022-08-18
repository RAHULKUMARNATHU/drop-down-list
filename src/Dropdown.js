import React from "react";

function Dropdown() {
  return (
    <div className="dropdown">
      <div className="dropdown-btn"> Select One
      <span className="fas fa-caret-down"></span></div>
      <div className="dropdown-content">
        <div className="dropdown-item">React</div>
        <div className="dropdown-item">Node</div>
        <div className="dropdown-item">Angular</div>
      </div>
    </div>
  );
}

export default Dropdown;
