import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NetflixNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <a className="navbar-brand" href="./index.html">
          <img src="../assets/netflix_logo.png" alt="netflix-logo" id="logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Tv Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recentrly Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
          <Nav.Link href="#">Back Office</Nav.Link>
        </Nav>
        <Nav>
          <a
            className="nav-link active"
            aria-current="page"
            href="./index.html"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search icon"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </a>
          <Nav.Link href="#">KIDS</Nav.Link>
          <a className="nav-link" href="./index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </a>
          <Nav.Link className="d-flex" eventKey={2} href="./index.html">
            <img src="../assets/avatar.png" id="avatar" alt="small-avatar" />
            <NavDropdown id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <a
                  className="dropdown-item nav-dropdown-color"
                  href="http://ubeytdemir.me/netflix-ui/profile.html"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/avatar.png"
                      id="avatar-small"
                      alt="small-avatar"
                    />
                    Evil Baby
                  </div>
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <a
                  className="dropdown-item nav-dropdown-color"
                  href="http://ubeytdemir.me/netflix-ui/profile.html"
                >
                  Manage Profiles
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <a
                  className="dropdown-item nav-dropdown-color"
                  href="http://ubeytdemir.me/netflix-ui/accounts.html"
                >
                  Account
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <a
                  className="dropdown-item nav-dropdown-color"
                  href="./index.html"
                >
                  Help Center
                </a>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <a
                  className="dropdown-item nav-dropdown-color"
                  href="../login.html"
                >
                  Signout Netflix
                </a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NetflixNavbar;
