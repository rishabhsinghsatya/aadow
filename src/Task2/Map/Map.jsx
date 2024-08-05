import React, { useState } from "react";
import "./Map.css";

const Map = () => {
  const [mappings, setMappings] = useState([
    { source: "First name", target: "First name", imported: true },
    { source: "Last name", target: "Last name", imported: true },
    { source: "Phone number", target: "Phone number", imported: true },
    { source: "City", target: "Don't import", imported: false },
    { source: "Country", target: "Don't import", imported: false },
  ]);

  const handleTargetChange = (index, newTarget) => {
    const newMappings = [...mappings];
    newMappings[index].target = newTarget;
    newMappings[index].imported = newTarget !== "Don't import";
    setMappings(newMappings);
  };

  return (
    <div className="property-mapping-container">
      <h2>Map properties</h2>
      <p>
        Ensure columns from your file are mapped correctly to contact properties
      </p>

      <div className="mapping-header">
        <span>Columns in your file</span>
        <span>Properties in OpenPhone</span>
      </div>

      <div className="mapping-list">
        {mappings.map((mapping, index) => (
          <div key={index} className="mapping-item">
            <div className="source-field">
              <span className="icon">📄</span>
              <span>{mapping.source}</span>
            </div>
            <div className="arrow">→</div>
            <div className="target-field">
              <span className="icon">👤</span>
              <select
                value={mapping.target}
                onChange={(e) => handleTargetChange(index, e.target.value)}
              >
                <option value="Don't import">Don't import</option>
                <option value="First name">First name</option>
                <option value="Last name">Last name</option>
                <option value="Phone number">Phone number</option>
                <option value="Email">Email</option>
                <option value="Website">Website</option>
                <option value="Lead status">Lead status</option>
              </select>
            </div>
            {mapping.imported && <span className="checkmark">✓</span>}
            {!mapping.imported && <span className="info-icon">ℹ️</span>}
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="cancel-button">Cancel</button>
        <button className="next-button">Next</button>
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default Map;
