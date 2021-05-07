import {  Col, Image, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import "./CompanyCard.scss";

const CompanyCard = (props) => {
  return (
    <>
      <Container fuild="true" className="CompanyCard">
        <Row>
          <Col>
            <Image
              src="https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/addd76db091ac903db279a51a1541eee.png"
              thumbnail
            />
          </Col>
          <Col md={9}>
            <Row>
                <p> <b>{props.companyName}</b></p>
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

export default connect(mapStateToProps)(CompanyCard);
