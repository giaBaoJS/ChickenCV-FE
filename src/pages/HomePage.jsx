import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getDataHomePage } from "../actions/jobsAction";
import Banner from "../components/Banner/Banner";
import GroupJobs from "../components/GroupJobs/GroupJobs";
import Search from "../components/Search/Search";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

import "./HomePage.scss";
const HomePage = () => {
  const { jobsByDate } = useSelector((state) => state.jobs);
  const { jobsBySalary } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const locationObject = location.search;

  const query = new URLSearchParams(locationObject);
  const keyWord = query.get("keyWord");
  const locationParam = query.get("location");
  const orderBy = query.get("orderBy");

  useEffect(() => {
    dispatch(getDataHomePage());
  }, []);

  function handleSearch(event, data) {
    event.preventDefault();
    const params = new URLSearchParams(data);
    history.push("/filterjob?" + params.toString());
  }

  return (
    <div>
      <Banner />
      <Search
        keyWord={keyWord}
        location={locationParam}
        orderBy={orderBy}
        onSubmit={handleSearch}
      />
      <div className="list-group">
        <Container>
          <Row>
            <Col xs={12}>
              {jobsByDate && <GroupJobs data={jobsByDate} name={1} />}
            </Col>
            <Col md={12}>
              {jobsBySalary && <GroupJobs data={jobsBySalary} name={3} />}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="promote">
        <Container>
          <p className="promote__title">
            <strong>ChickenCV</strong> là nền tảng Kết nối cơ hội việc làm thông
            qua <strong>CV (hồ sơ xin việc)</strong> đầu tiên tại Việt Nam, nơi
            mà ứng viên sẽ được Nhà tuyển dụng chủ động săn đón, dù ở bất kỳ vị
            trí nào.
          </p>
          <Row>
            <Col md={4}>
              <div className="promote__content">
                <Image
                  src="https://www.topcv.vn/v3/images/new/hoan_thien_ho_so.png"
                  alt="job"
                />
                <h4>Hoàn thiện hồ sơ xin việc</h4>
                <p>
                  Chuẩn bị hồ sơ xin việc ấn tượng và chuyên nghiệp với Công cụ
                  viết CV số 1 Việt Nam.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="promote__content">
                <Image
                  src="https://www.topcv.vn/v3/images/new/chu_dong_tim_viec.png"
                  alt="job"
                />
                <h4>Chủ động tìm việc</h4>
                <p>
                  Hệ thống gợi ý các công việc phù hợp với CV của bạn, chỉ 1
                  click để ứng tuyển nhanh chóng.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="promote__content">
                <Image
                  src="https://www.topcv.vn/v3/images/new/co_hoi.png"
                  alt="job"
                />
                <h4>Nhận cơ hội hấp dẫn</h4>
                <p>
                  Nhà tuyển dụng chủ động tìm kiếm bạn qua CV đã tạo trên
                  CheckCV, nhận ngay nhiều lời mời hấp dẫn.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
