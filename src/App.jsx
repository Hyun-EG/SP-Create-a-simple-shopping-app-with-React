import "./App.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import data from "./Data";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-area">
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "2rem",
            padding: "2rem",
          }}
        >
          홈
        </Link>
        <Link
          to="/detail"
          style={{ color: "white", textDecoration: "none", fontSize: "2rem" }}
        >
          상세페이지
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Container>
                  <Row className="shoes-area">
                    <Col xs={{ order: "last" }}>
                      <Card shoes={shoes[0]} i={1} />
                    </Col>
                    <Col xs>
                      <Card shoes={shoes[1]} i={2} />
                    </Col>
                    <Col xs={{ order: "first" }}>
                      <Card shoes={shoes[2]} i={3} />
                    </Col>
                  </Row>
                </Container>
              </div>
            }
          />
          <Route path="/detail" element={<div>상세페이지임</div>} />
        </Routes>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`}
        alt="shoes"
        width={"80%"}
      ></img>
      <h4 style={{ paddingTop: "1rem" }}>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
