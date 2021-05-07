import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Banner.scss";
import Swal from "sweetalert2"
const Banner = () => {
  const { user } = useSelector((state) => state.authReducer);
  const history = useHistory();
  const renderButton = () => {
    if (!user) {
      return <Link className="btn-cv" to="" onClick={()=>{
        Swal.fire({
          title: 'Bạn cần đăng nhập!',
          showCancelButton: true,
          icon: 'warning',
          confirmButtonText: `Đăng nhập`,
          cancelButtonText: "Hủy",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/login")
          }
        })
        
      }}>TẢi CV LÊN</Link>
    } else if (user.company) {
      return <Link to="/profile" className="btn-cv">TẠO JOB MỚI</Link>
    } else {
      return <Link to="/profile" className="btn-cv">TẢi CV LÊN</Link>
    }
  }
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col md={8}>
            <div className="banner__content">
              <h2>TÌM VIỆC KHÓ - CÓ CHICKENCV</h2>
              <h3>SỞ HỮU NGAY CV XỊN CÙNG VIỆC LÀM MƠ ƯỚC</h3>
              <p>
                30.000+ cơ hội việc làm được kết nối thành công qua ChickenCV mỗi
                ngày
              </p>
            </div>
            {renderButton()}
          </Col>
          <Col md={4}>
            <Image src="https://www.topcv.vn/v3/images/super-fast-job/image_topcv.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
