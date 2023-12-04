import React from "react";

import { Container, Navbar, FormControl } from "react-bootstrap";

import { useDispatch } from "react-redux";
import {
  search,
  searchPages,
  AllMovie,
} from "./../redux/action/MoviesActions.js";

const NavBar = () => {
  const dispatcher = useDispatch();

  const onSearch = (word) => {
    if (word === "") {
      dispatcher(AllMovie());
    } else {
      dispatcher(search(word));
      dispatcher(searchPages(word));
    }
  };
  return (
    <Navbar className="sticky-top" bg="van" variant="dark" expand="sm">
      <Container >
        <Navbar.Brand>
          <a style={{ textDecoration: "none" }} href="/">
            <img src="/img/l1.png" alt="logo " className=" logo" />

            <div className="fs-5  name-logo">Cinema-TV </div>
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            onChange={(e) => onSearch(e.target.value)}
            type="text"
            placeholder="search"
            className="me-2 w-60 text-center"
            aria-label="Search"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
