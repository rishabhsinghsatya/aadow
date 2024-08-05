import React, { useState } from "react";
import "./Identify.css";

const Identify = () => {
  const [mappings, setMappings] = useState([
    { source: "First name", target: "First name", optional: false },
    { source: "Last name", target: "Last name", optional: true },
    { source: "Phone number", target: "Phone number", optional: false },
  ]);

  return (
    <div className="contact-mapping-container">
      <h2>Identify contacts</h2>
      <p>These properties will be used to identify your contacts</p>

      <div className="mapping-header">
        <span>Columns in your file</span>
        <span>Properties in OpenPhone</span>
      </div>

      <div className="mapping-list">
        {mappings.map((mapping, index) => (
          <div key={index} className="mapping-item">
            <div className="source-field">
              <span className="icon">📄</span>
              <select value={mapping.source} onChange={() => {}}>
                <option value={mapping.source}>{mapping.source}</option>
              </select>
            </div>
            <div className="arrow">→</div>
            <div className="target-field">
              <span className="icon">👤</span>
              <select value={mapping.target} onChange={() => {}}>
                <option value={mapping.target}>
                  {mapping.target}
                  {mapping.optional ? " (Optional)" : ""}
                </option>
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="cancel-button">Cancel</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default Identify;
