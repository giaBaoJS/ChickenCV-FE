import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EDIT_JOB_DES, TURN_ON_MODAL,GET_DATA_EDIT } from "../../constants";
import {deleteJob} from '../../actions/companyAction';

import "./index.scss";
import { Link } from "react-router-dom";
const JobDesItem = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const handleClick = (id) => {
    dispatch(deleteJob(id));
  };
  return (
    <div className="job-des">
      <div className="cv-content row">
        <div className="col-2">
          <img
            src="https://static.topcv.vn/company_logos/cong-ty-tnhh-eib-asia-607960e022a99.jpg"
            alt="cv"
            className="img-fluid"
          />
        </div>
        <div className="col-10">
          <div className="content-head row justify-content-between">
            <h1 className="title col-8">
              <Link to={`/jobdetails/${data.id}`}>

              {data.name}
              </Link>
              </h1>
            <p className="col-4">
              <i className="fas fa-clock"></i>
              {data.dateCreated}
            </p>
          </div>
          <p>{data.description}</p>
          <div className="content-bottom">
            <Button
              variant="info"
              className="mr-3"
              onClick={() => {
                dispatch({type: GET_DATA_EDIT, payload: data})
                dispatch({ type: TURN_ON_MODAL, payload: EDIT_JOB_DES });
              }}
            >
              Edit
            </Button>
            <Button variant="warning" onClick={(e) => handleClick(data.id)}>
              Xóa công việc
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDesItem;
