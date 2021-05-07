import { connect, useDispatch } from "react-redux";
import { Tab, Tabs, Container, Row, Col, Button, Card } from "react-bootstrap";
// import { Button } from "bootstrap";
import "./InfoRecruid.scss";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getCompanyById } from "../../actions/companyAction";
import Jobs from "../GroupJobs/Jobs/Jobs";
const InfoRecruid = (props) => {
  let dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getCompanyById(props.companyId));
  }, [props.companyName]);
  return (
    <>
      <Container>
        <Tabs defaultActiveKey="news" id="uncontrolled-tab-example">
          <Tab eventKey="news" title="TIN TUYỂN DỤNG">
            <Row>
              <Col xs={8}>
                <p className="DescribeJob">
                  <b>Mô tả công việc</b>
                  <br></br>
                  <span>{props.description}</span>
                </p>
                <p className="JobRequires">
                  <b>Yêu cầu công việc</b>
                  <br></br>
                  <span>{props.requirement}</span>
                </p>
                <p className="Benefits">
                  <b>Quyền lợi được hưởng</b>
                  <br></br>
                  <span>{props.benefit}</span>
                </p>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="jobs" title="CÔNG VIỆC CÙNG CÔNG TY">
          {props.jobsCompany &&
              props.jobsCompany.items.map((item, index) => (
                <Jobs type="formComDetails" data={item} key={index}/>
              ))}
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state.companyReducer,
});

export default connect(mapStateToProps)(InfoRecruid);
