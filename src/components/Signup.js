import React, { useRef } from 'react'
import {Form , Button, Card} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    const email = useRef()
    const password = useRef()
    const password2 = useRef()
  return (
    <>
    
        <Card>
            <Card.Body>
                <h2 ClassName="text-center mb-4">Sign UP</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={email} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="passowrd1" ref={password} required />
                    </Form.Group>
                    <Form.Group id="password2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={password2} required />
                    </Form.Group>
                    <Button className="w-100" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? Log in
        </div>
    </>
  )
}
