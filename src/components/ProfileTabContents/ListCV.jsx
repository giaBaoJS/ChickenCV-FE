import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListCVOfCadidate } from "../../actions/cvAction";
import { ADD_CV, TURN_ON_MODAL } from "../../constants";
import CVItem from "../CVItem";

const ListCV = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const listCV = useSelector((state) => state.candidateReducer.listCV);
  useEffect(() => {
    dispatch(getListCVOfCadidate(user?.candidate.id));
  }, []);
  return (
    <div className="list-cv">
      <Button
        variant="success mb-3"
        onClick={() =>
          dispatch({
            type: TURN_ON_MODAL,
            payload: ADD_CV,
          })
        }
      >
        Thêm CV
      </Button>
      <div className="list-cv-content">
        {listCV &&
          listCV.map((item, index) => <CVItem key={index} data={item} />)}
      </div>
    </div>
  );
};

export default ListCV;
