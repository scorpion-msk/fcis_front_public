import React from "react";
import PropTypes from "prop-types";
import "../css/DropDownList.css";

const DropDownList = ({
  itemsList,
  initialItem,
  splitItemNames,
  listName,
  menu,
  setMenu,
  selectedItem,
  setSelectedItem,
}) => {
  let menuItems = itemsList.map((item) => {
    return (
      <li
        key={item.id}
        onClick={() => {
          setSelectedItem(item.id);
          setMenu(false);
        }}
      >
        {splitItemNames ? item.name.split(" ")[0] : item.name}
      </li>
    );
  });
  return (
    <div className="TabSTS_contents_container">
      <div className="STSWidgettitle">
        <svg viewBox="0 0 24 24">
          <path d="M13.0215 19.9301V21.9501C15.0315 21.7501 16.8615 20.9501 18.3415 19.7401L16.9215 18.3101C15.8115 19.1701 14.4815 19.7501 13.0215 19.9301Z"></path>
          <path d="M4.03125 12C4.03125 7.95005 7.06125 4.59005 10.9812 4.07005V2.05005C5.95125 2.58005 2.03125 6.84005 2.03125 12C2.03125 17.16 5.95125 21.4201 10.9812 21.9501V19.93C7.06125 19.41 4.03125 16.05 4.03125 12Z"></path>
          <path d="M19.952 11.0001H21.972C21.772 8.99005 20.972 7.16005 19.762 5.68005L18.332 7.11005C19.192 8.21005 19.772 9.54005 19.952 11.0001Z"></path>
          <path d="M18.3415 4.26005C16.8615 3.05005 15.0215 2.25005 13.0215 2.05005V4.07005C14.4815 4.25005 15.8115 4.83005 16.9215 5.69005L18.3415 4.26005Z"></path>
          <path d="M18.332 16.9L19.762 18.32C20.972 16.84 21.772 15.01 21.972 13H19.952C19.772 14.46 19.192 15.79 18.332 16.9Z"></path>
          <path d="M16 11.1C16 8.61 14.1 7 12 7C9.9 7 8 8.61 8 11.1C8 12.76 9.33 14.73 12 17C14.67 14.73 16 12.76 16 11.1ZM12 12C11.41 12 10.93 11.52 10.93 10.93C10.93 10.34 11.41 9.86 12 9.86C12.59 9.86 13.07 10.34 13.07 10.93C13.07 11.52 12.59 12 12 12Z"></path>
        </svg>
        <span>{itemsList[initialItem].name}</span>
      </div>
      <div
        className="dropDownList"
        onClick={() => {
          menu ? setMenu(false) : setMenu(true);
        }}
      >
        <label>{listName}</label>
        <div className="region-select">
          <span>
            {itemsList.filter((item) => item.id === selectedItem)[0].name}
          </span>
          <svg viewBox="0 0 20 20">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </div>
      </div>
      {menu && (
        <ul
          className={itemsList.length <= 8 ? "menuListShort" : "menuListLong"}
        >
          {menuItems}
        </ul>
      )}
    </div>
  );
};

export default DropDownList;

DropDownList.propTypes = {
  itemsList: PropTypes.array.isRequired, // list of items to show in drop-down list
  initialItem: PropTypes.number.isRequired, // initial item to show in list header
  splitItemNames: PropTypes.bool.isRequired, // define if it should be short names in the dropdownlist or not
  listName: PropTypes.string.isRequired, // component title on top of drop-down list
  menu: PropTypes.bool.isRequired, // boolean variable for dropdown menu state
  setMenu: PropTypes.func.isRequired, // setState fuction for dropdown menu
};
