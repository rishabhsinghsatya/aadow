import React, { useState } from "react";

const CampaignSettings = () => {
    const [expanded, setExpanded] = useState({
        campaignDetails: true,
        budget: false,
        googleMerchantCenter: false,
        urlExpansion: false
      });
      const [campaignName, setCampaignName] = useState('Campaign 209175');
      const [biddingStrategy, setBiddingStrategy] = useState('Conversions');
      const [country, setCountry] = useState('United States');
      const [language, setLanguage] = useState('English');
      const [budget, setBudget] = useState(50);
    
      const toggleExpand = (section) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
      };
    
      return (
        <div className="campaign-settings">
          <div className="progress-bar">
            <span className="active">Campaign settings</span>
            <span>Asset group</span>
            <span>Confirmation</span>
          </div>
    
          <h1>Campaign settings</h1>
    
          <div className="section">
            <div className="section-header" onClick={() => toggleExpand('campaignDetails')}>
              <span>Campaign details</span>
              <span>{expanded.campaignDetails ? '▲' : '▼'}</span>
            </div>
            {expanded.campaignDetails && (
              <div className="section-content">
                <div className="form-group">
                  <label>Campaign name</label>
                  <input type="text" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} disabled />
                  <small>You can't change the campaign name.</small>
                </div>
                <div className="form-group">
                  <label>Bidding strategy</label>
                  <select value={biddingStrategy} onChange={(e) => setBiddingStrategy(e.target.value)} disabled>
                    <option value="Conversions">Conversions</option>
                  </select>
                  <small>You can't change the bidding strategy as Google use the Conversion strategy to optimize for conversions and maximize $.</small>
                </div>
                <div className="form-group">
                  <label>Country & Language</label>
                  <div className="country-language">
                    <select value={country} onChange={(e) => setCountry(e.target.value)}>
                      <option value="United States">United States</option>
                    </select>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <button className="add-market">+ Add another market</button>
                </div>
              </div>
            )}
          </div>
    
          <div className="section">
            <div className="section-header" onClick={() => toggleExpand('budget')}>
              <span>Budget</span>
              <span>{expanded.budget ? '▲' : '▼'}</span>
            </div>
            {expanded.budget && (
              <div className="section-content">
                <div className="form-group">
                  <label>Fixed budget</label>
                  <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
                  <span>USD</span>
                </div>
              </div>
            )}
          </div>
    
          <div className="section">
            <div className="section-header" onClick={() => toggleExpand('googleMerchantCenter')}>
              <span>Google Merchant Center</span>
              <span>{expanded.googleMerchantCenter ? '▲' : '▼'}</span>
            </div>
            {expanded.googleMerchantCenter && (
              <div className="section-content">
                <h3>Choose Merchant Center account</h3>
                <div className="merchant-account">
                  <div>
                    <span className="flag">🇦🇹</span>
                    <span>Austria</span>
                    <span>971-412-1543</span>
                    <button className="connect">Connect</button>
                  </div>
                  <div>
                    <span className="flag">🇨🇭</span>
                    <span>Switzerland</span>
                    <span>285-129-2854</span>
                    <button className="connect">Connect</button>
                  </div>
                  <div>
                    <span className="flag">🇨🇭</span>
                    <span>Switzerland</span>
                    <span>285-688-9691</span>
                    <button className="add-feed">Add feed</button>
                  </div>
                </div>
                <button className="create-account">+ Create Merchant Center account</button>
              </div>
            )}
          </div>
    
          <div className="section">
            <div className="section-header" onClick={() => toggleExpand('urlExpansion')}>
              <span>URL Expansion</span>
              <span>{expanded.urlExpansion ? '▲' : '▼'}</span>
            </div>
          </div>
    
          <div className="footer">
            <span className="saved">Saved just now</span>
            <div>
              <button className="cancel">Cancel</button>
              <button className="continue">Continue</button>
            </div>
          </div>
        </div>
      );
};

const styles = `
  .campaign-settings {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .progress-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .progress-bar span {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 15px;
  }

  .progress-bar .active {
    background-color: #007bff;
    color: white;
  }

  h1 {
    margin-bottom: 20px;
  }

  .section {
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f8f8f8;
    cursor: pointer;
  }

  .section-content {
    padding: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[disabled], select[disabled] {
    background-color: #f0f0f0;
  }

  small {
    display: block;
    color: #666;
    margin-top: 5px;
  }

  .country-language {
    display: flex;
    gap: 10px;
  }

  .country-language select {
    flex: 1;
  }

  .add-market, .create-account {
    display: block;
    margin-top: 10px;
    color: #007bff;
    background: none;
    border: none;
    cursor: pointer;
  }

  .merchant-account > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .merchant-account span {
    margin-right: 10px;
  }

  .connect, .add-feed {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .connect {
    background-color: #007bff;
    color: white;
  }

  .add-feed {
    background-color: #f0f0f0;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .saved {
    color: #28a745;
  }

  .cancel, .continue {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .cancel {
    background-color: #f0f0f0;
    margin-right: 10px;
  }

  .continue {
    background-color: #007bff;
    color: white;
  }
`;

const CampaignSettingsWithStyles = () => (
  <>
    <style>{styles}</style>
    <CampaignSettings />
  </>
);

export default CampaignSettingsWithStyles;
