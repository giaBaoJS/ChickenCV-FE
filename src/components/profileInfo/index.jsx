import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  EDIT_INFO_CANDIDATE,
  EDIT_INFO_COMPANY,
  EDIT_USER,
  TURN_ON_MODAL,
} from "../../constants";
import "./index.scss";
const ProFileInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const [infoUser, setInfoUser] = useState({});
  useEffect(() => {
    user.roleIds[0] == 2
      ? setInfoUser(user?.candidate)
      : setInfoUser(user?.company);
  }, [user]);
  return (
    <div className="profile-info">
      <div className="container">
        <div className="profile-info-content">
          <Row>
            <Col sm={3}>
              <div className="contain-left">
                <div className="avatar">
                  <img
                    src="https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg?compress=1&resize=400x400"
                    alt="avatar"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
            <Col sm={9}>
              <div className="contain-right">
                <div className="contain-right-content">
                  <p>
                    <span>Tên đăng nhập:</span> {user.userName}
                  </p>
                  <p>
                    <span>Tên:</span> {infoUser.name}
                  </p>
                  {user.company && (
                    <>
                      <p>
                        <span>Số điện thoại:</span> {infoUser.phoneNumber}
                      </p>
                      <p>
                        <span>Địa chỉ:</span> {infoUser.address}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="profile-info-indicators">
          <Button
            variant="info"
            onClick={() => {
              dispatch({
                type: EDIT_USER,
                payload: infoUser
              })
              dispatch({
                type: TURN_ON_MODAL,
                payload:
                  user?.roleIds[0] === 2
                    ? EDIT_INFO_CANDIDATE
                    : EDIT_INFO_COMPANY,
              })
            }
            }
          >
            Chỉnh sửa thông tin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProFileInfo;
