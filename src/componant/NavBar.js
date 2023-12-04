import React from "react";

import { Container,Navbar,FormControl  } from 'react-bootstrap'

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
    // <div className="nav-style ">
    //   <Container className="">
    //     <Row className="nav-align">
    //       <Col lg="2">
    //         <a className="fs-1  name-logo" href="/">
    //           <div className="fs-1  name-logo">Cinema-TV </div>
    //         </a>
    //       </Col>
    //       <Col lg="2">
    //         <img className="logo" src="/img/l1.png " alt="logo" />
    //       </Col>

    //       <Col lg="8">
    //         <div className=" search">
    //           <input
    //             onChange={(e) => onSearch(e.target.value)}
    //             type="text"
    //             placeholder="     Search..."
    //           />
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <Navbar className="sticky-top" bg="van" variant="dark" expand="sm" >
    <Container>
        <Navbar.Brand>
            <a style={{     textDecoration:'none' }} href='/'>
                <img  src='/img/l1.png'alt='logo ' className=' logo' />
        
                <div className="fs-5  name-logo">Cinema-TV </div>
            </a>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
            onChange={(e) => onSearch(e.target.value)}
                type="text"
                placeholder="search"
                className="me-2 w-100 text-center"
                aria-label="Search"
            />
           
        </Navbar.Collapse>
    </Container>
</Navbar>
  );
};

export default NavBar;
