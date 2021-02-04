import React from "react";
import { Link } from "react-router-dom";
import { HouseFill } from "react-bootstrap-icons";
import { Navbar, Button, Badge } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        <Link class="navbar-brand" to="/">
          <HouseFill />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle />
      <h1>
        <Badge variant="primary">React Redux CRUD Operations</Badge>
      </h1>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/addPost" className="btn">
            <Button variant="success">Add Post</Button>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
