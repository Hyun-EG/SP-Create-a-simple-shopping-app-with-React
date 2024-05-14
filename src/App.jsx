import "./App.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import data from "./Data";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            className="logo"
            onClick={() => {
              navigate("./");
            }}
          >
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./detail");
              }}
            >
              Cart
            </Nav.Link>
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
          <Route path="/detail" element={<Detail />} />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치정보임</div>} />
          </Route>
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<div>첫주문 양배추즙 공짜</div>}></Route>
            <Route path="two" element={<div>생일 쿠폰 지급</div>}></Route>
          </Route>
          <Route path="*" element={<div>404page</div>} />
        </Routes>
      </div>
    </>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
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
