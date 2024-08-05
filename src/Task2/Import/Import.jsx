import React, { useState } from "react";
import "./Import.css";

const Import = () => {
  const [importName, setImportName] = useState(
    "Livestorm Attendees - May 2021"
  );
  const [consentChecked, setConsentChecked] = useState(false);

  return (
    <div className="import-contacts-container">
      <h2>Import contacts</h2>
      <p>Few final details before you import contacts</p>

      <div className="stats-container">
        <div className="stat-box">
          <span className="stat-number">1,355</span>
          <span className="stat-description">Contacts will be created</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">894</span>
          <span className="stat-description">Contacts will be updated</span>
        </div>
      </div>

      <div className="import-name-container">
        <label htmlFor="importName">Name your import</label>
        <p className="input-description">
          This is the name that would show up when filtering Contacts by
          "Source"
        </p>
        <input
          type="text"
          id="importName"
          value={importName}
          onChange={(e) => setImportName(e.target.value)}
        />
      </div>

      <div className="consent-container">
        <label>
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
          />
          I have obtained explicit consent for communication from all 1,355
          contacts
        </label>
      </div>

      <div className="buttons-group">
        <button className="cancel-button">Cancel</button>
        <div className="back-and-import">
          <button className="back-button">Back</button>
          <button className="import-button" disabled={!consentChecked}>
            Import contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Import;
