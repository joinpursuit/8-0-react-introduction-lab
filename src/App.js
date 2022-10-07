import React from "react";

import "./index.css";
import NavBar from "./Components/NavBar";
import { Row, Col, Container } from "react-bootstrap";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container className="container-fluid">
        <Row xs={1} md={2} className=" my-2  gy-2 h-100">
          <Col md={8}>
            <UserProfile />
            <Col
              className="p-4 my-5 gy-2"
              style={{
                background: "whitesmoke",
                boxShadow: "4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)",
              }}
            >
              <Posts />
            </Col>
          </Col>
          <Col
            md={4}
            style={{
              background: "whitesmoke",
              boxShadow: "4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)",
            }}
          >
            <Contacts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
