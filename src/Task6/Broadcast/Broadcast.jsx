import React, { useState } from "react";
import "./Broadcast.css";
import {
  ArrowBigDownDash,
  ArrowBigUpDash,
  Bell,
  CalendarDays,
  ChartColumnIncreasing,
  Dot,
  ExternalLink,
  Filter,
  FilterX,
  Mail,
  Plus,
} from "lucide-react";

const Broadcast = () => {
  const divData = [
    { amount: "27,301", status: "8.7%", track: "delivered" },
    { amount: "45.9%", status: "0.92%", track: "Avg. opened rate" },
    { amount: "17.8%", status: "3.2%", track: "Avg. clicked rate" },
    { amount: "0%", status: "0%", track: "Avg. converted" },
  ];

  const [activeDiv, setActiveDiv] = useState(0);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleDivClick = (index) => {
    setActiveDiv(index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderStatus = (status) => {
    const numericValue = parseFloat(status); // Convert status to a number

    if (numericValue > 1) {
      return (
        <span className="green-text">
          <ArrowBigUpDash size={16} className="green-text" /> {status}
        </span>
      );
    }
    if (numericValue < 1) {
      return (
        <span className="red-text">
          <ArrowBigDownDash size={16} className="red-text" /> {status}
        </span>
      );
    }
    return <span className="grey-text">{status}</span>;
  };

  return (
    <div className="broadcast-container">
      <div className="container-header">
        <input
          className="search-area"
          type="text"
          placeholder="Filter by name or decription..."
        />
        <Bell size={16} className="bell-icon" />
      </div>

      <div className="explore-container">
        <div className="explore-left">
          <h2 className="title">
            Optimize your broadcast with our enhanced Dashboard!
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque
            incidunt illum temporibus officia explicabo aliquam excepturi ad
            deserunt repellendus!
          </p>
        </div>
        <button className="explore-btn">Explore now</button>
      </div>

      <div className="broadcast-header">
        <h2 className="braodcast-title">Broadcasts</h2>
        <div className="broadcast-right">
          <button>
            <CalendarDays className="icons" />1 May 2024 - 1 Apr 2024
          </button>
          <button>
            <ExternalLink className="icons" />
            Export to CSV
          </button>
          <button className="create-btn">
            <Plus className="icons create" />
            Create Broadcast
          </button>
        </div>
      </div>

      <div className="div-tabs">
        {divData.map((data, index) => (
          <div
            key={index}
            className={`box ${activeDiv === index ? "active" : ""}`}
            onClick={() => handleDivClick(index)}
          >
            <div className="box-content">
              <div className="left-side">
                <h3 className="count-heading">{data.amount}</h3>
                <div>{data.track}</div>
              </div>
              <p>{renderStatus(data.status)}</p>
              <ChartColumnIncreasing className="graph-icon" />
            </div>
          </div>
        ))}
      </div>

      <div className="tab-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            Newsletters
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            API Triggered Broadcast
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" ? (
            <div className="newsletter">
              <div className="newsletter-top">
                <h1>413 Newletters</h1>
                <FilterX className="filter-icon" />
              </div>
              <div className="newsletter-container">
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-title">
                      <Mail className="tiles-icon" />
                      Mobile Weekly Drop
                    </div>
                    <div className="newsletter-status">
                      <span className="draft">
                        <Dot style={{ margin: "0px" }} />
                        Draft
                      </span>
                    </div>
                  </div>
                  <div className="newsletter-details">
                    <div>
                      <p>Newsletters not sent</p>
                      Created today at 1:51 pm • Last edited 19 minutes ago
                    </div>
                    <button
                      style={{
                        border: "1px solid #ddd",
                        backgroundColor: "#fff",
                      }}
                    >
                      Continue to edit
                    </button>
                  </div>
                </div>
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-title">
                      <Mail
                        className="tiles-icon"
                        style={{ backgroundColor: "179BAE" }}
                      />
                      Web Weekly Drop
                    </div>
                    <div className="newsletter-status">
                      <span className="sent">
                        <Dot style={{ margin: "0px" }} />
                        Sent
                      </span>
                    </div>
                  </div>
                  <div className="newsletter-details">
                    <div>
                      <p>Newsletters not sent</p>
                      Created today at 1:51 pm • Last edited 19 minutes ago
                    </div>
                    <div className="status-list">
                      {" "}
                      <div>
                        <p>4125</p> Delivered
                      </div>
                      <div>
                        <p>41.5%</p> Opened
                      </div>
                      <div>
                        <p>173%</p> Clicked
                      </div>
                      <div>
                        <p>0% </p>Converted
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-title">
                      {" "}
                      <Mail
                        className="tiles-icon"
                        style={{ backgroundColor: "41B3A2" }}
                      />
                      Weekly Newsletter
                    </div>
                    <div className="newsletter-status">
                      <span className="sent">
                        <Dot style={{ margin: "0px" }} />
                        Sent
                      </span>
                    </div>
                  </div>
                  <div className="newsletter-details">
                    <div>
                      <p>Newsletters not sent</p>
                      Created today at 1:51 pm • Last edited 19 minutes ago
                    </div>
                    <div className="status-list">
                      {" "}
                      <div>
                        <p>4125</p> Delivered
                      </div>
                      <div>
                        <p>41.5%</p> Opened
                      </div>
                      <div>
                        <p>173%</p> Clicked
                      </div>
                      <div>
                        <p>0% </p>Converted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Content for Tab 2</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
