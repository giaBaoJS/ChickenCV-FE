import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect, useDispatch, useSelector } from "react-redux";
import { applyJob } from "../../actions/cadidateAction";
import {
  getDataCompanyCard,
} from "../../actions/cvAction";

import "./JobCard.scss";
const JobCard = (props) => {
  const [show, setShow] = useState(false);
  const [cv, setCV] = useState("");
  const {user} = useSelector((state) => state.authReducer)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClick = (e) => {
    setShow(true);
  };
  const handleClose = (e) => {
    setShow(false);
  };
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataCompanyCard(user ? user.candidate ? user.candidate.id : user.company ? user.company.id : 1 : 1));
  }, [user,props.id]);
  const handleApply = (data) => {
    data['jobId'] = props.id
    dispatch(applyJob(data,user));
    setShow(false);
  };
  const handleChange = (e) => {
    setCV(e.target.value);
  };

  const isApplied = (id, items) => {
    let flag = false;
    items.map((item, index) => {
      if (item.jobId == id) {
        flag = true;
      }
    });
    return flag;
  };
  return (
    <Container fuild="true">
      <Row className="ContainerLogo">
        <Col>
          <Image
            src="https://static.topcv.vn/company_logos/cong-ty-co-phan-tu-van-kiem-dinh-xay-dung-quoc-te-5ceb5eb82df31.jpg"
            rounded
          />
        </Col>
        <Col xs={8}>
          <b>
            <p className="titleJob">{props.name}</p>
          </b>
          <Row>
            <b>
              <p className="companyName"> {props.companyName} </p>
            </b>
          </Row>
          <Row>
            <i>
              <p className="DateEnd">
                {" "}
                {"Ngày tạo công việc: " + props.dateCreated}{" "}
              </p>
            </i>
          </Row>
        </Col>
        <Col>
          <Row className="buttonGroup">
            {user && user.candidate && user.candidate.id != null && (
              <Button
                variant={isApplied(props.id, props.cvAppliced) ? 'light' :"success"}
                onClick={(e) => handleClick(e)}
                disabled={isApplied(props.id, props.cvAppliced)}
              >
                {isApplied(props.id, props.cvAppliced) ? 'Đã ứng tuyển' :'Ứng tuyển ngay'}
              </Button>
            )}
          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin ứng tuyển</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleApply)}>
            <p> Họ và tên: {user && user.candidate && user.candidate.name}</p>
            <p> CV ứng tuyển:</p>
            <div key={`inline-radio`} className="mb-3">
              {props.listCV.map((item, index) => (
                <Form.Check
                  key={index}
                  inline
                  label={item.name}
                  name="group1"
                  type={"radio"}
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                  {...register("cvId", {})}
                />
              ))}
            </div>
            <Button type="submit">Ứng tuyển</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

const mapStateToProps = (state, props) => ({
  ...state.candidateReducer,
  ...props,
});

export default connect(mapStateToProps)(JobCard);
