import React from "react";
import Logo from "../../images/tmalogo.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../constants";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT });
  }
  return (
    <div className="wrap-nav">
      <Container>
        <div className="nav-bar">
          <div className="nav-bar__left">
            <Link to="/">
              <img className="image" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-bar__right">
            {user === null ? (
              <>
                <Link to="/login" className="login">
                  Đăng nhập
                </Link>
                <Link to="/signup-candidate" className="signup-candidate">
                  Đăng ký
                </Link>
                <Link to="/signup-company" className="signup-company">
                  Đăng ký tuyển dụng
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile">Xin chào, {user.company? user.company.name: user.candidate.name}</Link>
                <Button
                  onClick={handleLogout}
                  variant="danger"
                  className="logout ml-5"
                >
                  Đăng xuất
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
