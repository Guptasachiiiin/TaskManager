import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { NavLink } from "react-router-dom"; // Fix: imported from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const email = sessionStorage.getItem("email").replace(/['"]+/g, "");
  const name = sessionStorage.getItem("name").replace(/['"]+/g, "");

  return (
    <div
      className="m-4 rounded-4 shadow-lg overflow-hidden border border-gray-700"
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="rounded-4 px-3"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">
            Task Manager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto mx-20">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#bbbbbb" : "#ffffff",
                  textDecoration: "none",
                })}
                className="m-3"
              >
                AllTask
              </NavLink>

              <NavLink
                to="/complete"
                style={({ isActive }) => ({
                  color: isActive ? "#bbbbbb" : "#ffffff",
                  textDecoration: "none",
                })}
                className="m-3"
              >
                Complete
              </NavLink>

              <NavLink
                to="/incomplete"
                style={({ isActive }) => ({
                  color: isActive ? "#bbbbbb" : "#ffffff",
                  textDecoration: "none",
                })}
                className="m-3"
              >
                Incomplete
              </NavLink>

              <NavLink
                to="/inprogress"
                style={({ isActive }) => ({
                  color: isActive ? "#bbbbbb" : "#ffffff",
                  textDecoration: "none",
                })}
                className="m-3"
              >
                InProgress
              </NavLink>
            </Nav>

            <Navbar.Text className="text-white flex flex-col">
              <p className="m-0 p-0 fw-bold text-1xl ">{name}</p>
              <div>
              <span className="fw-bold">{email}</span>
              </div>
              <button
                onClick={() => {
                  sessionStorage.clear();
                  Navigate("/signin");
                }}
                className="border rounded text-2xl p-1 w-[70px] bg-dark-600 text-white hover:bg-red-600 m-0"
              >
                Logout
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
