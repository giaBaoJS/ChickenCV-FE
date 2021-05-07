import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cancelApplyOfCandidate } from "../../actions/companyAction";
import "./index.scss";
const CVAppliced = (props) => {
  const { cv, job, dateCreated } = props.data;
  let dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer)
  const cancelAppliedOfCandidate = (cvid,jobid) => {
    dispatch(cancelApplyOfCandidate(user != null ? user.company.id : 1,cvid,jobid))
  }
  return (
    <div className="cv-appliced">
      <div className="cv-content row">
        <div className="col-2">
          <img
            src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.1/outstanding_2.png"
            alt="cv"
            className="img-fluid"
          />
        </div>
        <div className="col-10">
          <div className="content-head row justify-content-between">
            <h1 className="title col-8">{cv.name}</h1>
            <p className="col-4">
              <i className="fas fa-clock"></i>
              {dateCreated}
            </p>
          </div>
          <h3>
            <Link to={"/jobdetails/" + job.id}>
              {job.name}
            </Link>
            </h3>
          <div className="cv-link">
            <p>link: {cv.path}</p>
          </div>
          <div className="content-bottom">
            <Button variant="primary" className="mr-3">
            <a target="_blank" href={cv.path} style={{ color: "white" }}>
                Xem CV
              </a>
            </Button>
            <Button variant="warning" onClick={(e) => cancelAppliedOfCandidate(cv.id,job.id)}>Từ chối ứng tuyển</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVAppliced;
