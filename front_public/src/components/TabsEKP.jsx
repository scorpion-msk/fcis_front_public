import React, { useState } from "react";
import "../css/TabsEKP.css";
import EKPWidgets from "./EKPWidgets";

const TabsEKP = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="TabsEKP_window">
      <div className="TabsEKP">
        <div
          className={activeTab === "tab1" ? "activeTabEKP" : "passiveTabEKP"}
          onClick={() => {
            setActiveTab("tab1");
          }}
        >
          Спортивные
        </div>
        <div
          className={activeTab === "tab2" ? "activeTabEKP" : "passiveTabEKP"}
          onClick={() => {
            setActiveTab("tab2");
          }}
        >
          Физкультурные
        </div>
        <div id="separate_horizontal_ekp"></div>
      </div>
      <div className="TabEKP_contents">
        {activeTab === "tab1" ? (
          <EKPWidgets widget_color="#FF9500" section_num="Спортивные" />
        ) : (
          <EKPWidgets widget_color="#3744C4" section_num="Физкультурные" />
        )}
      </div>
    </div>
  );
};

export default TabsEKP;
