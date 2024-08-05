import React, { useState } from "react";
import "./Upload.css";
import uploadIcon from "../../assets/upload.svg";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="csv-upload-container">
      <h2>Upload a CSV file</h2>
      <p className="subtitle">
        Make sure file includes contact name and phone number
      </p>

      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <img src={uploadIcon} alt="" />
        <p className="drop-text">
          {file ? file.name : "Drop a file or click to browse"}
        </p>
        <p className="file-size-text">File size up to 10,000 rows works best</p>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileInput}
          accept=".csv"
        />
      </div>

      <div className="learn-more">
        Learn more about importing contacts or download a sample CSV file
      </div>
    </div>
  );
};

export default Upload;
