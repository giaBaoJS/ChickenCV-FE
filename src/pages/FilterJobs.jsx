import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Jobs from "../components/GroupJobs/Jobs/Jobs";
import { getJobsByFilter } from "../actions/jobsAction";
import queryString from "query-string";
import Search from "../components/Search/Search";

import { useHistory, useLocation } from "react-router";
import "./FilterJobs.scss";

const FilterJobs = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationObject = location.search;
  const query = new URLSearchParams(locationObject);
  const history = useHistory();

  const keyWord= query.get("keyWord");
  const locationParam= query.get("location");
  const orderBy= query.get("orderBy");

  const { filterJobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobsByFilter(locationObject));
  }, [dispatch, keyWord, locationParam, orderBy]);

  

  function handleSearch(event, data) {
    event.preventDefault();
    const params = new URLSearchParams(data);
    history.push("/filterjob?"+params.toString());
  }
  return (
    <div className="filter-jobs">
      <Search
        keyWord={keyWord}
        location={locationParam}
        orderBy={orderBy}
        onSubmit={handleSearch}
      />
      <Container>
        <div className="filter-jobs__header">
          <h4 className="title hightlight">
            { queryString.parse(locationObject).orderBy == 1
              ?"Viêc làm mới hấp dẫn"
              :queryString.parse(locationObject).orderBy == 3
              ? "Việc làm lương cao"
              : "Việc làm phù hợp"}
          </h4>
          <p>
            <span className="hightlight">{filterJobs.length}</span> việc phù hợp
          </p>
        </div>
        <Row>
          {filterJobs &&
            filterJobs.map((item, index) => (
              <Col key={index} md={12}>
                <Jobs data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default FilterJobs;
