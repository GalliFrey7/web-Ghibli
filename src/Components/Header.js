import React, { Component } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import logo from './logo.png'

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar  collapseOnSelect expand="md" bg="dark" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                heights="50"
                                width="50"
                                ClassName="d-inline-block align-top"
                                alt="logo"
                            /> Ghibli studio
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Filmography</Nav.Link>
                            </Nav>
                            {/* <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    ClassName="mr-sm-2"
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}
