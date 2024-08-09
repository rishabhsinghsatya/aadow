import React, { useState } from "react";
import "./Campaign.css";

const Campaign = () => {
  const [activeTab, setActiveTab] = useState("campaignSettings");
  const [expanded, setExpanded] = useState({
    campaignDetails: true,
    budget: false,
    googleMerchantCenter: false,
    urlExpansion: false,
  });
  const [campaignName, setCampaignName] = useState("Campaign 209175");
  const [biddingStrategy, setBiddingStrategy] = useState("Conversions");
  const [country, setCountry] = useState("United States");
  const [language, setLanguage] = useState("English");
  const [budget, setBudget] = useState(50);
  const [urls, setUrls] = useState(["https://example.com"]);

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const addUrl = () => {
    setUrls([...urls, ""]);
  };

  const updateUrl = (index, newUrl) => {
    const newUrls = urls.map((url, i) => (i === index ? newUrl : url));
    setUrls(newUrls);
  };

  const removeUrl = (index) => {
    const newUrls = urls.filter((_, i) => i !== index);
    setUrls(newUrls);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "campaignSettings":
        return (
          <div className="campaign-body">
            <h3>Campaign settings</h3>

            <div className="section">
              <div
                className="section-header"
                onClick={() => toggleExpand("campaignDetails")}
                style={{
                  backgroundColor: expanded.campaignDetails
                    ? "#f8f8f8"
                    : "#fff",
                }}
              >
                <span>Campaign details</span>
                <span>{expanded.campaignDetails ? "▲" : "▼"}</span>
              </div>
              {expanded.campaignDetails && (
                <div className="section-content">
                  <div className="form-group">
                    <div className="form-group-left">
                      <label>Campaign name</label>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non fuga nihil beatae!
                      </p>
                    </div>
                    <div className="form-group-right">
                      <input
                        type="text"
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        disabled
                      />
                      <small>You can't change the campaign name.</small>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <div className="form-group-left">
                      <label>Bidding strategy</label>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Reprehenderit blanditiis tenetur fuga!
                      </p>
                    </div>
                    <div className="form-group-right">
                      <select
                        value={biddingStrategy}
                        onChange={(e) => setBiddingStrategy(e.target.value)}
                        disabled
                      >
                        <option value="Conversions">Conversions</option>
                      </select>
                      <small>
                        You can't change the bidding strategy as Google uses the
                        Conversion strategy to optimize for conversions and
                        maximize $.
                      </small>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <div className="form-group-left">
                      <label>Country & Language</label>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <div className="form-group-right">
                      <div className="country-language">
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          <option value="United States">United States</option>
                        </select>
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                        >
                          <option value="English">English</option>
                        </select>
                      </div>
                      <button className="add-market">
                        + Add another market
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="section">
              <div
                className="section-header"
                onClick={() => toggleExpand("budget")}
                style={{
                  backgroundColor: expanded.campaignDetails
                    ? "#f8f8f8"
                    : "#fff",
                }}
              >
                <span>Budget</span>
                <span>{expanded.budget ? "▲" : "▼"}</span>
              </div>
              {expanded.budget && (
                <div className="section-content">
                  <div className="form-group">
                    <div className="form-group-left">
                      <label>Fixed budget</label>
                    </div>
                    <div className="form-group-right">
                      <input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                      <span>USD</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="section">
              <div
                className="section-header"
                onClick={() => toggleExpand("googleMerchantCenter")}
                style={{
                  backgroundColor: expanded.campaignDetails
                    ? "#f8f8f8"
                    : "#fff",
                }}
              >
                <span>Google Merchant Center</span>
                <span>{expanded.googleMerchantCenter ? "▲" : "▼"}</span>
              </div>
              {expanded.googleMerchantCenter && (
                <div className="section-content">
                  <div className="form-group">
                    {" "}
                    <div className="form-group-left">
                      <h4>Choose Merchant Center account</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat saepe vitae enim ut quo.
                      </p>
                    </div>
                    <div className="form-group-right">
                      {" "}
                      <div className="merchant-account">
                        <div className="country-sec">
                          <p>
                            <span className="flag">🏳️‍🌈</span>Austria
                          </p>
                        </div>
                        <div>
                          <span>285-129-2854</span>
                          <button className="connect">Connect</button>
                        </div>
                        <div>
                          <span>285-129-2854</span>
                          <button className="connect">Connect</button>
                        </div>
                        <div>
                          <p>
                            <span className="flag">🏁</span>Switzerland
                          </p>
                        </div>
                        <div>
                          <span>285-129-2854</span>
                          <button className="add-feed">Add feed</button>
                        </div>
                        <button className="create-account">
                          + Create Merchant Center account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="section">
              <div
                className="section-header"
                onClick={() => toggleExpand("urlExpansion")}
                style={{
                  backgroundColor: expanded.campaignDetails
                    ? "#f8f8f8"
                    : "#fff",
                }}
              >
                <span>URL Expansion</span>
                <span>{expanded.urlExpansion ? "▲" : "▼"}</span>
              </div>
              {expanded.urlExpansion && (
                <div className="section-content">
                  <h3>Manage URLs</h3>
                  {urls.map((url, index) => (
                    <div key={index} className="form-group url-group">
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => updateUrl(index, e.target.value)}
                      />
                      <button onClick={() => removeUrl(index)}>Remove</button>
                    </div>
                  ))}
                  <button onClick={addUrl}>+ Add URL</button>
                </div>
              )}
            </div>
          </div>
        );
      case "assetGroup":
        return <h1>Asset group (Content goes here)</h1>;
      case "confirmation":
        return <h1>Confirmation (Content goes here)</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="campaign-settings">
      <div className="progress">
        <h4>
          <span
            className={activeTab === "campaignSettings" ? "active" : ""}
            onClick={() => setActiveTab("campaignSettings")}
          >
            1
          </span>
          Campaign settings
        </h4>
        <div className="hr"></div>

        <h4>
          <span
            className={activeTab === "assetGroup" ? "active" : ""}
            onClick={() => setActiveTab("assetGroup")}
          >
            2
          </span>
          Asset group
        </h4>
        <div className="hr"></div>
        <h4>
          <span
            className={activeTab === "confirmation" ? "active" : ""}
            onClick={() => setActiveTab("confirmation")}
          >
            3
          </span>
          Confirmation
        </h4>
      </div>

      {renderContent()}

      <div className="footer">
        <span className="saved">Saved just now</span>
        <div>
          <button className="cancel-btn">Cancel</button>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
