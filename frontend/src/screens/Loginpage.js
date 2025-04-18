import { useEffect, useState } from 'react';
import Mainscreen from '../components/Mainscreen';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErroorMessage';
import {Button, Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import "./Loginpage.css";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';




const Loginpage = ({history}) => {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     
     const dispatch = useDispatch();
     const userLogin = useSelector((state) => state.userLogin);
     const { loading, error, userInfo } = userLogin;

     const navigate = useNavigate();

     useEffect(() => {
       if(userInfo){
        navigate('/mynotes');
       }
     }, [navigate,userInfo]);
     

     const submitHandler = async (e) =>{
      e.preventDefault();

      dispatch(login(email,password));
     }


  return (
    <Mainscreen title='Login'>
    <div className='loginContainer'>
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage> }
    {loading && <Loading />}
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <Row className="py-3">
        <Col>
        New To ZippDiary ? <Link to="/signup">Signup Here</Link>
        </Col>
    </Row>
    </div>
  </Mainscreen>
  );
};

export default Loginpage;