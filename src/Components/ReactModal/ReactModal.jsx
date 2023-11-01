import React, { useEffect } from "react";
import Modal from "react-modal";

const ReactModal = ({
  Comp,
  reqOpenModal,
  setReqOpenModal,
  handleFormSubmit,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 10000001000000,
      backgroundColor: "#1d2634",
    },
  };
  Modal.setAppElement("#root");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setReqOpenModal(false);
  }

  useEffect(() => {
    setIsOpen(reqOpenModal);
  }, [reqOpenModal]);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="modal-title">Edit Part</h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>{Comp}</div>
        <div style={{ padding: "24px 0px 10px 0px" }}>
          <button onClick={handleFormSubmit} className="submit-btn">
            Submit
          </button>
          &nbsp;&nbsp;
          <button onClick={closeModal} className="close-btn">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
