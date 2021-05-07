import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CV,
  ADD_JOB_DES,
  EDIT_INFO_CANDIDATE,
  EDIT_INFO_COMPANY,
  EDIT_JOB_DES,
  TURN_OFF_MODAL,
} from "../../constants";

const ModalHOC = (Component) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.profileReducer.modal);
  const { typeForm } = useSelector((state) => state.profileReducer.modal);
  const titleHeading = () => {
    switch (typeForm) {
      case EDIT_JOB_DES:
        return "EDIT JOB DESCRIPTION";
      case ADD_JOB_DES:
        return "ADD JOB DESCRIPTION";
      case EDIT_INFO_CANDIDATE:
        return "EDIT INFO CADIDATE";
      case EDIT_INFO_COMPANY:
        return "EDIT INFO COMPANY";
      case ADD_CV:
        return "ADD NEW CV";
    }
  };
  return () => {
    return (
      <Modal show={show} onHide={() => dispatch({ type: TURN_OFF_MODAL })}>
        <Modal.Header closeButton>
          <Modal.Title>{titleHeading()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Component />
        </Modal.Body>
      </Modal>
    );
  };
};

export default ModalHOC;
