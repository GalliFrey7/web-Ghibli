import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width:"null"}}>
                <h1 className='text-center'>Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email addres</Form.Label>
                        <Form.Control type="email" placeholder='Enter email'/>
                        <Form.Text>
                            We`ll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="5"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicChackbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
