import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getCompanyById } from "../actions/companyAction";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import Jobs from "../components/GroupJobs/Jobs/Jobs";
import "./CompanyDetails.scss";
const CompanyDetails = (props) => {
  let dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getCompanyById(id));
  }, [props.companyName]);
  return (
    <>
      <CompanyCard></CompanyCard>
      <br></br>
      <Container className="InformationCompany">
        <Row>
          <Col xs={7} className="divLeft">
            <Row>
              <b> Tuyển dụng</b>
            </Row>
            {props.jobsCompany &&
              props.jobsCompany.items.map((item, index) => (
                <Jobs type="formComDetails" data={item} key={index}/>
              ))}
          </Col>
          <Col className="divRight">
            <Row>
              <b> Thông tin liên hệ: </b>
              </Row>
            <Row>
              <p>{props.companyAddress}</p>
            </Row>
             <Row>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4179483192697!2d106.62891661533455!3d10.85578186069115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298af1491bff%3A0xcf2251bacb86b0f2!2sTMA%20Solutions%20Lab%206!5e0!3m2!1svi!2s!4v1619604559379!5m2!1svi!2s"
                width="450"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state.companyReducer,
});

export default connect(mapStateToProps)(CompanyDetails);
