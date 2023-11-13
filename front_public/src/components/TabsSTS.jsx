import React, { useState } from "react";
import FetchData from "./FetchData";
import "../css/TabsSTS.css";
import DropDownList from "./DropDownList";

const TabsSTS = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // set state for tabs switching
  const [menu, setMenu] = useState(false); // set state for dropdown menu
  let foData = []; // prepare empty array for federal areas data
  let regData = []; // prepare empty array for regions names data
  const setInitiaItem = () => {
    return activeTab === "tab1"
      ? "ba0da8ea-f51a-47c3-92ab-23d28173fc1b"
      : "c90b4fa2-2708-40e4-ab3d-aac7ef4c10c8";
  };
  // fetch data with all regions and FO names and id's
  const allRegionsData = FetchData(
    "https://sportrf.gov.ru/portal-public/regions/get_all",
    []
  );
  const [selectedItem, setSelectedItem] = useState(setInitiaItem());

  // prepare arrays of data for regions and federal areas
  if (!allRegionsData.isLoading) {
    allRegionsData.data.map((item) => {
      if (item.code === null) {
        item.name = item.fo_name;
      }
      return item;
    });
    foData = allRegionsData.data.filter((item) => item.code === null);
    regData = allRegionsData.data.filter((item) => item.code != null);
    console.log(selectedItem);
    console.log(foData.filter((item) => item.id === selectedItem)[0].name);
  }

  return (
    <div className="TabsSTS_window">
      <h2>
        Статистика по
        {activeTab === "tab1" ? " федеральным округам" : " субъектам"}
      </h2>
      <h3>по итогам 2022 года</h3>
      <div className="TabsSTS">
        <div
          className={activeTab === "tab1" ? "activeTabSTS" : "passiveTabSTS"}
          onClick={() => {
            setActiveTab("tab1");
            setMenu(false);
          }}
        >
          По федеральным округам
        </div>
        <div
          className={activeTab === "tab2" ? "activeTabEKP" : "passiveTabEKP"}
          onClick={() => {
            setActiveTab("tab2");
            setMenu(false);
          }}
        >
          По субъектам
        </div>
        <div id="separate_horizontal_sts"></div>
      </div>
      {!allRegionsData.isLoading && (
        <div className="TabSTS_contents">
          {activeTab === "tab1" ? (
            <DropDownList
              itemsList={foData}
              initialItem={6}
              splitItemNames={true}
              listName="Федеральный округ"
              menu={menu}
              setMenu={setMenu}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ) : (
            <DropDownList
              itemsList={regData}
              initialItem={71}
              splitItemNames={false}
              listName="Субъект РФ"
              menu={menu}
              setMenu={setMenu}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TabsSTS;

// API to fetch
// https://sportrf.gov.ru/portal-public/block_items/get_fo_statistics?region_id=4ec29e8b-111b-4723-a0dd-8c6c3c67c764
