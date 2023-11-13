import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal"; // react component for modal window called from service box
import "../css/Servicebox.css";

const Servicebox = ({
  // Servicebox own props
  epgu, // EPGU stick for box icon, boolean
  iconSrc, // Path to box logo icon and modal window if called
  boxTitle, // Text for box title
  boxText, // Text for box description
  boxLinkText, // Link name for hyperlink within box
  path, // URL for service box link
  target, // Target property for window.open method, _blank or _self
  // Modal window component props
  boxModal, // Trigger for modal window call, boolean
  modalStyle, // CSS style for modal window, modalContext or modalContextOrg
  titleModal, // Text for modal title
  textModal, // Text for modal description
  modalServiceId, // service id for LinkModal children component
}) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="serviceBox">
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={() => {
          boxModal ? setModal(true) : window.open(path, target);
        }}
      >
        <div id="boxIconback"></div>
        <img id="boxIcon" src={iconSrc} alt="boxIcon" />
        {epgu && (
          <img
            className="epguLogo"
            src="./media/Icons/gosuslugi_sticker.svg"
            alt=""
          />
        )}
        <div className="boxDescription">
          <h2 id="boxTitle">{boxTitle}</h2>
          <h3 id="boxText">{boxText}</h3>
        </div>
        <div className="boxLink">
          <h3 id="boxLinktext">{boxLinkText}</h3>
          <div id="vectorBox">
            <svg viewBox="0 0 24 24">
              <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" />
            </svg>
          </div>
        </div>
      </div>
      {boxModal && (
        <Modal
          modal={modal} // Modal window state, boolean
          setModal={setModal} // useState function to change modal state
          modalStyle={modalStyle} // Passed from Servicebox, see above
          iconSrc={iconSrc} // Passed from Servicebox, see above
          titleModal={titleModal} // Passed from Servicebox, see above
          textModal={textModal} // Passed from Servicebox, see above
          modalServiceId={modalServiceId} // Passed from Servicebox, see above
        />
      )}
    </div>
  );
};

Servicebox.propTypes = {
  epgu: PropTypes.bool.isRequired,
  iconSrc: PropTypes.string.isRequired,
  boxTitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  boxText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  boxLinkText: PropTypes.string.isRequired,
  path: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self"]),
  boxModal: PropTypes.bool.isRequired,
  modalStyle: PropTypes.oneOf(["modalContext", "modalContextOrg"]),
  titleModal: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  textModal: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  modalServiceId: PropTypes.oneOf(["12", "21", "22", "23"]),
};

export default Servicebox;
