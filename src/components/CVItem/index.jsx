import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCVCadidate } from "../../actions/cvAction";
import Moment from 'moment';

import "./index.scss";
const CVItem = (props) => {
  const { name, id, path,dateModified } = props.data;
  const dispatch = useDispatch();
  return (
    <div className="cv-item">
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
            <h1 className="title col-8">{name}</h1>
            <p className="col-4">
              <i className="fas fa-clock"></i>
              {Moment(dateModified).format('DD/MM/yyyy')}
            </p>
          </div>
          <div className="cv-link">
            <p>{path}</p>
          </div>
          <div className="content-bottom">
            <Button variant="primary" className="mr-3">
              <a target="_blank" href={path} style={{ color: "white" }}>
                Xem CV
              </a>
            </Button>
            <Button
              variant="warning"
              onClick={() => dispatch(deleteCVCadidate(id))}
            >
              Xóa CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVItem;
