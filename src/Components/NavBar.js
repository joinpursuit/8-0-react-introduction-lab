import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./favicon.jpeg";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width={30}
              height={30}
              className="d-inline-block align-top"
            />{" "}
            Pursuit
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
