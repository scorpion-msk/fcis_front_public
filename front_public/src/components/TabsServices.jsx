import React, { useState } from "react";
import TabCitizens from "./TabsServices/TabCitizens";
import TabOrganizations from "./TabsServices/TabOrganizations";
import "../css/TabsServices.css";

const TabsServices = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className={activeTab === "tab1" ? "Tab1_window" : "Tab2_window"}>
      <div className="Tabs">
        <div
          className={activeTab === "tab1" ? "activeTab" : "passiveTab"}
          onClick={() => {
            setActiveTab("tab1");
          }}
        >
          Гражданам
        </div>
        <div
          className={activeTab === "tab2" ? "activeTab" : "passiveTab"}
          onClick={() => {
            setActiveTab("tab2");
          }}
        >
          Организациям
        </div>
        <div id="separate_horizontal_services"></div>
        <div className="Tab_contents">
          {activeTab === "tab1" ? <TabCitizens /> : <TabOrganizations />}
        </div>
      </div>
    </div>
  );
};

export default TabsServices;
