import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Jobs from "./Jobs/Jobs";
import "./GroupJobs.scss";

const GroupJobs = (props) => {
  return (
    <div className="group-jobs">
      <div className="group-jobs__header">
        <h3 className="title">
          {props.name === 1
            ? "VIỆC LÀM MỚI HẤP DẪN"
            : "VIỆC LÀM LƯƠNG CAO"}
        </h3>
        <Link
          to={`/filterjob?orderBy=${props.name}`}
          className="all-job"
        >
          Xem tất cả+ 
        </Link>
      </div>
      <div className="group-jobs__main">
        <Row>
          {props.data.map((item, index) => (
            <Col key={index} md={6}>
              <Jobs data={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default GroupJobs;
