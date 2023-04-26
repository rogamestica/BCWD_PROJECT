import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyButton from "./MyButton";

// import logo from'../static/img/logo.png';
import logo2 from '../static/img/logo2.png';
import '../static/css/nav-css.css';

const Navigation = () => {
    return (
        <>
            <Navbar sticky="top" bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo2}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="BCWD 1974"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end my-link">
                        <Nav className="mr-auto ">
                            <Nav.Link as="div"><Link to="/" className="my-link" >Home</Link></Nav.Link>
                            <NavDropdown title="News & Advisories" id="basic-nav-dropdown" className="my-nav-dropdown" >
                                <NavDropdown.Item as="div"><Link to="/bcwdnews" className="my-link" >BCWD News</Link></NavDropdown.Item>
                                <NavDropdown.Item as="div"><Link to="/serviceadvisories" className="my-link" >Service Advisories</Link></NavDropdown.Item>
                                <NavDropdown.Item as="div"><Link to="/waterqualityresult" className="my-link" >Water Quality Result</Link></NavDropdown.Item>
                                <NavDropdown.Item as="div"><Link to="/donorupdates" className="my-link" >Donor Updates</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Bills & Payments" id="basic-nav-dropdown">
                                <NavDropdown.Item as="div"><Link to="/billspaymentpartners" className="my-link" >Bills Payment Partners</Link></NavDropdown.Item>
                                <NavDropdown.Item as="div"><Link to="/billcalculator" className="my-link" >Bill Calculator</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Company" id="basic-nav-dropdown">
                                <NavDropdown.Item as="div"><Link to="/aboutus" className="my-link" >About Us</Link></NavDropdown.Item>
                                <NavDropdown.Item as="div"><Link to="/bidding" className="my-link" >Bidding</Link></NavDropdown.Item>
                                <NavDropdown.Item as="div"><Link to="/transparency" className="my-link" >Transparency</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                                <NavDropdown.Item as="div"><Link to="/contactus" className="my-link" >Contact Us</Link></NavDropdown.Item>
                                <NavDropdown.Item as="div"><Link to="/faqs" className="my-link" >Faqs</Link></NavDropdown.Item>
                            </NavDropdown>

                            <MyButton name="My Water Bill" />

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default Navigation;