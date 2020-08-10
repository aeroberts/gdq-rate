import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { Avatar } from "./avatar";

interface Route {
  route: string;
  auth: boolean;
}
const profileDropdownRoutes: Record<string, Route> = {
  Profile: { route: "/profile", auth: true },
  Settings: { route: "/settings", auth: true },
  Logout: { route: "/logout", auth: true },
  Login: { route: "/login", auth: false },
  Register: { route: "/register", auth: false },
};

function mapRoutes(
  auth: Boolean,
  mapFunc: ([key, val]: [string, Route]) => React.ReactNode
) {
  return Object.entries(profileDropdownRoutes)
    .filter(([_, val]) => val.auth === auth)
    .map(mapFunc);
}
const NavbarLink: React.FC<{ to: string; name: string; hidden?: boolean }> = ({
  to,
  name,
  hidden,
}) => {
  return (
    <Navbar.Text
      className={hidden ? "d-sm-none justify-content-end" : undefined}
    >
      <LinkContainer to={to}>
        <Nav.Link eventKey={to}>{name}</Nav.Link>
      </LinkContainer>
    </Navbar.Text>
  );
};

const CustomToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  )
);

export default function GDQRNavBar() {
  const { userData } = React.useContext(AuthContext);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="navigation-bar"
      collapseOnSelect
    >
      <Nav>
        <LinkContainer to="/">
          <Nav.Link>
            <Navbar.Brand>GDQ-Rate</Navbar.Brand>
          </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavbarLink name="All Runs" to="/runs" />
          <span className="ml-auto d-none d-sm-flex justify-content-end">
            {userData ? (
              <Dropdown alignRight id="profile-dropdown">
                <Dropdown.Toggle as={CustomToggle} id="profile-dropdown">
                  <Nav.Link>
                    <Avatar
                      uri={userData.avatar_url}
                      name={userData.display_name}
                      size={40}
                    />
                  </Nav.Link>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {mapRoutes(!!userData, ([key, { route }]) => (
                    <LinkContainer to={route}>
                      <Dropdown.Item as="button" key={key}>
                        {key}
                      </Dropdown.Item>
                    </LinkContainer>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <NavbarLink name="Login" to="/login" />
                <NavbarLink name="Register" to="/register" />
              </>
            )}
          </span>
          {mapRoutes(!!userData, ([key, { route }]) => (
            <NavbarLink hidden key={key} name={key} to={route} />
          ))}
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}
