import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { withRouter } from "react-router-dom";



const Navigation = (props) => {

    //Destructuring pathname
    const { pathname } = props.location;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark expand="md" className="p-2 shadow text-light" style={{ zIndex: "99", backgroundColor: "#3a3f44" }}>
                <NavbarBrand onClick={() => { props.history.push("/") }} style={{ cursor: "pointer" }} className="ml-2">Starcatcher</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav pills>
                        <NavItem style={{ cursor: "pointer" }}>
                            <NavLink active={pathname === "/"} onClick={() => { props.history.push("/") }}>Home (temp)</NavLink>
                        </NavItem>
                        <NavItem style={{ cursor: "pointer" }}>
                            <NavLink active={pathname === "/Radio"} onClick={() => { props.history.push("/Radio") }}>Radio</NavLink>
                        </NavItem>

                        <NavItem style={{ cursor: "pointer" }}>
                            <NavLink active={pathname === "/TPT"} onClick={() => { props.history.push("/TPT") }}>TPT</NavLink>
                        </NavItem>
                        <NavItem style={{ cursor: "pointer" }}>
                            <NavLink active={pathname === "/scripts"} onClick={() => { props.history.push("/scripts") }}>Scripts</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default withRouter(Navigation);