import React, {  } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import "./Frontpage.css";
import Flex from '../components/Flex/Flex';

const frontpage = () => {

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     if(userInfo){
    //      history.push("/mynotes");
    //     }
    //   }, [history]);

  return (
    <>
    <div className='main'>
        <Container>
            <Row>
                <div className='main-content'>
                    <div className='intro-text'>
                        <h1>Welcome To ZippDiary</h1>
                        <p>One Safe place to zip all your thoughts, feelings and opinions</p>
                    </div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button size='lg'>Login</Button>
                        </a>
                        <a href='/signup'>
                            <Button size='lg' variant='outline-primary'>Signup</Button>
                        </a>
                    </div>

                </div>
            </Row>
        </Container>
    </div>
    <Flex title={"Features"} heading={"Learn move about zippdiary features"}>
        <p>Easy to use, great to store those quick thoughts without having to keep up with post-its."</p>
    </Flex>
    <Flex title={"Reviews"} heading={"Learn move about zippdiary reviews"}>
        <p>Easy to use, great to store those quick thoughts without having to keep up with post-its."</p>
    </Flex>
    <Flex title={"About"} heading={"Learn move about zippdiary"}>
        <p>Easy to use, great to store those quick thoughts without having to keep up with post-its."</p>
    </Flex>
    </>
    
  )
}

export default frontpage;