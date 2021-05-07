import React from "react";
import { Container, Image } from "react-bootstrap";
import Logo from "../../images/tmalogo.png";
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Image className="logo" src={Logo} />
        {/* <h4>An app build by Chicken Team</h4> */}
        <p>Copyright ©. All right reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;
