import React from "react";
import PropTypes from "prop-types";
import "../css/Modal.css";
import LinkModal from "./LinkModal"; // Used for links within modal window, it could be one link or list of regions with scrolling

const Modal = ({
  // Modal window own attributes
  modal, // Modal window state, boolean
  setModal, // useState function to change modal state
  modalStyle, // CSS style for modal window, modalContext or modalContextOrg
  iconSrc, // Path to box logo icon and modal window if called
  titleModal, // Text for modal title
  textModal, // Text for modal description
  // Modal Link component props
  modalServiceId, // service Id for Modal window
}) => {
  return (
    modal && (
      <div className="modal_active">
        <div id="modalBackground" onClick={() => setModal(false)}></div>
        <div className={modalStyle}>
          <svg id="ellipse_icon" viewBox="0 0 128 73">
            <circle cx="64" cy="9" r="64" />
          </svg>
          <img id="icon_modal" src={iconSrc} alt="icon_modal" />
          <svg
            id="cross_icon"
            viewBox="0 0 24 24"
            onClick={() => setModal(false)}
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
          <h2 id="titleModal">{titleModal}</h2>
          <h3 id="textModal">{textModal}</h3>
          <LinkModal
            modalServiceId={modalServiceId} // Passed from Modal, see above
          />
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  modalStyle: PropTypes.oneOf(["modalContext", "modalContextOrg"]).isRequired,
  iconSrc: PropTypes.string.isRequired,
  titleModal: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  textModal: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  modalServiceId: PropTypes.oneOf(["12", "21", "22", "23"]),
};
export default Modal;
