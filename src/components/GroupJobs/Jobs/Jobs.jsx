import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import test from "../../../images/test.jpg";
import "./Jobs.scss";
import Moment from 'moment';
import 'moment/locale/vi'
Moment.locale('vi');
const Jobs = (props) => {
  return (
    <div className={"jobs " + (props.type === "filterJob" ? "bg-change" : "")}>
      <Row className="jobs__wrap">
        <Col md={3}>
          <Image width="100%" src={test} />
        </Col>
        <Col md={9}>
          <div className="jobs__content">
            <Link to={`/jobdetails/${props.data.id}`} className="jobs__content-title text_ellipsis">
              {props.data.name}
            </Link>
            <Link to={`/companydetails/${props.data.companyId}`} className="company-name text_ellipsis">
             {props.data.companyName}
            </Link>
            <Row>
              <Col xs={6}>
                <span>{props.data.salary && props.data.salary.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'})}</span>
              </Col>
              <Col xs={6}>
                <span>{props.data.location && props.data.location}</span>
              </Col>
              <Col xs={12}>
                <span>Cập nhật {Moment(props.data.dateCreated).startOf('minutes').fromNow()}</span>
              </Col>
            </Row>
            {props.type && props.type === "filterJob" && (
              <a className="save-job">Lưu tin</a>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Jobs;
