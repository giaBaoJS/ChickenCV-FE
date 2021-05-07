import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cancelApply } from "../../actions/cadidateAction";
import Moment from 'moment';

import "./index.scss";
const JobApplyItem = (props) => {
  const { cv, job, dateCreated } = props.data;
  const {user} = useSelector((state) => state.authReducer)
  let dispatch = useDispatch()
  const cancelApplied = (cvID,jobID) => {
    // let user = JSON.parse(localStorage.getItem('user'))
    dispatch(cancelApply(user != null ? user.candidate.id : 1,cvID,jobID))
  }
  return (
    <div className="job-apply-item">
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
              <Link to={"jobdetails/"+job.id}>{job.name}</Link>
            </h1>
            <p className="col-4">
              <i className="fas fa-clock"></i>
              {Moment(dateCreated).format('DD/MM/yyyy')}
            </p>
          </div>
          <h3>{cv.name}</h3>
          <div className="content-bottom">
            <Button variant="primary" className="mr-3">
            <a target="_blank" href={cv.path} style={{ color: "white" }}>
                Xem CV
              </a>
            </Button>
            <Button variant="warning" onClick={(e) => cancelApplied(cv.id,job.id)}>Hủy ứng tuyển</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplyItem;
