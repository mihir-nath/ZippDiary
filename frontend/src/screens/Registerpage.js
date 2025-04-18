import React, { useEffect, useState } from 'react';
import Mainscreen from '../components/Mainscreen';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErroorMessage';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "./Loginpage.css";
import { register } from '../actions/userActions';
import { useDispatch, useSelector } from "react-redux";

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {loading, error, userInfo } = userRegister;

  const navigate = useNavigate();

  useEffect(() => {
    if(userInfo){
      navigate('/mynotes');
    }
  }, [navigate,userInfo]);
  
  const submitHandler = async (e) =>{
     e.preventDefault();


     if(password !==confirmpassword){
      setMessage('Password does not match')
     } else{
      dispatch(register(name, email, password));
      
     }  
  };

  return (
    <Mainscreen title="Sign Up">
      <div className='registerContainer'>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage> }
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password"  value={confirmpassword} placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    <Row className="py-3">
        <Col>
        Already have account ? <Link to="/login">Login Here</Link>
        </Col>
    </Row>
      </div>
    </Mainscreen>
  )
}

export default Registerpage;