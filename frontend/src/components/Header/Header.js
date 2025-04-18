import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import logo from "../../data/images/zipperLogo.jpg";


function Header() {

  const history = useNavigate()
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img 
        alt=""
        src= {logo}
        width={30}
        height={30}
        className="d-inline-block align-top"/>{" "}
        ZippDiary
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
          
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav >
            <NavDropdown title="Mihir" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Prifile</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{
                localStorage.removeItem("userInfo");
                history("/");
              }}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;