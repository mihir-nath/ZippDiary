import React, { useEffect } from 'react'
import { Accordion, Badge, Button, useAccordionButton } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Mainscreen from '../../components/Mainscreen';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes,deleteNoteAction } from '../../actions/noteAction';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErroorMessage';
import ReactMarkdown from 'react-markdown';

const Mynotes = ({history,search}) => {
    
    const dispatch= useDispatch();

    const noteList= useSelector((state) => state.noteList);
    const {loading, notes , error}= noteList;

    const userLogin= useSelector((state) => state.userLogin);
    const {userInfo}= userLogin;

    const noteDelete =useSelector((state) =>state.noteDelete );
    const{
        loading :loadingDelete,
        errror:errorDelete,
        success:successDelete,
    } =noteDelete;

    const noteCreate=useSelector((state)=> state.noteCreate);
    const {success:successCreate}=noteCreate;

    const noteUpdate=useSelector((state)=> state.noteUpdate);
    const{success: successUpdate}= noteUpdate;


    const deleteHandler = (id) =>{
        if(window.confirm("Are you sure?")){
            dispatch(deleteNoteAction(id));
        }
    };

    const navigate= useNavigate();
    
    useEffect(() => {
    dispatch(listNotes());
    if(!userInfo){
        navigate("/");
    }
    }, [navigate,dispatch,userInfo,successCreate,successDelete,successUpdate]);

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <button
            type="button"
            //style={{ backgroundColor: 'transparent' }}
            onClick={decoratedOnClick}
          >
            {children}
          </button>
        );
    }
     
    return (
        <Mainscreen title= {`Welcome Back ${userInfo.name}..`} >
            <Link to="/createNote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">Create New Diary</Button>
            </Link>
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {errorDelete && (<ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>)}
            {loading && <Loading/>}
            {loadingDelete && <Loading /> }
            {
                notes?.map((note) => (
                    <Accordion key={note._id}>
                    <Card style={{ margin: '40px' }}>
                        <Card.Header style={{ display: "flex" }}>
                            <span style={{
                                color: "black",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 18,
                            }}>
                                <CustomToggle eventKey="0">{note.title}</CustomToggle>
                            </span>
                            <div>
                                <Link to={`/note/${note._id}`}>
                                    <Button >Edit</Button>
                                </Link>
                                
                                <Button variant="danger" className='mx-2' onClick={()=>deleteHandler(note._id)}>Delete</Button>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <h4>
                                <Badge bg="success">catagory = {note.catagory}</Badge>
                            </h4>
                            <blockquote className="blockquote mb-0">
                                <ReactMarkdown>
                                    {note.content}
                                    </ReactMarkdown>
                                <footer className="blockquote-footer">
                                    Created on {" "}
                                    <cite title='Source Title'>
                                        {note.createdAt.substring(0,10)}
                                    </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                ))
            }


        </Mainscreen>

    );
}

export default Mynotes;