import React from 'react';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { FcApproval } from 'react-icons/fc';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import LoginButton from '../buttons/loginButton';
import SignupButton from '../buttons/signupButton';
import '../live/Stream';
import '../cat/Cat';
import '../pod/Pod';
import './Navbar.css';
import { useAuth } from '../../Context/Authprovider';
import SignoutButton from '../buttons/signoutButton';

const NavHead = () => {
  const { auth, user } = useAuth();
  const handleClick = () => {
    // Reload the current page
    window.location.reload();
  };


  return (
    <div className="nav_section  ">
      <Navbar  className='Navbar' collapseOnSelect expand="lg" fixed="top"  variant="light">
        <Container>
          <Navbar.Brand href="/" onClick={handleClick}>
            <img src={logo} alt="brand logo" height={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-5 my-lg-0 justify-content-center"
              style={{ maxHeight: 'auto' }}
            >
              <Nav.Link href="/" as={Link} to="/" className="link" >
                Home
              </Nav.Link>

              <Nav.Link href="/Stream" as={Link} to="/Stream" className="link" >
                Live Stream
              </Nav.Link>
              <Nav.Link href="/pod" as={Link} to="/pod" className="link">
                Podcast
              </Nav.Link>
              <Nav.Link href="/cat" as={Link} to="/cat" className="link">
                Categories
              </Nav.Link>
              <Nav.Link href="/profile" as={Link} to="/" className="link">
                Profile
              </Nav.Link>
            </Nav>
            <Nav className="d-flex action">
              {!auth && <LoginButton />}
              {!auth && <SignupButton />}
            </Nav>
            <Nav>
              {auth && (
                <div className="signout_panel">
                  <div className="text">
                    Hi, {user.email} <FcApproval />
                  </div>
                  <SignoutButton />
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHead;




