import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNotes } from "../actions/noteAction";
import Loading from "../components/Loading";
import Mainscreen from "../components/Mainscreen";
import ReactMarkdown from 'react-markdown';
import ErrorMessage from "../components/ErroorMessage";
import { useNavigate } from "react-router-dom";



function CreateNote({history}){
    const [title, setTitle] =useState("");
    const [content, setContent] =useState("");
    const [catagory, setCatagory] =useState("");

    const dispatch= useDispatch();

    const noteCreate=useSelector((state)=> state.noteCreate);
    const{loading, error} = noteCreate;

    const resetHandler=()=>{
        setTitle("");
        setContent("");
        setCatagory("");
    };

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createNotes(title,content,catagory));
        if(!title || !content || !catagory) return;

        resetHandler();
        navigate("/mynotes");
    };




return (
    <Mainscreen title="Creare a Note">
        <Card>
            <Card.Header>Create a New Diary</Card.Header>
            
            <Card.Body>
                <Form onSubmit={submitHandler}>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        type="title"
                        value={title}
                        placeholder="Enter the Title"
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="content">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                        type="textarea"
                        value={content}
                        placeholder="Enter the Content"
                        rows={5}
                        onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>
                    {content && (
                        <Card>
                            <Card.Header>Note Preview</Card.Header>
                            <Card.Body>
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </Card.Body>
                        </Card>
                    )}
                    <Form.Group controlId="content">
                        <Form.Label>Catagory</Form.Label>
                        <Form.Control
                        type="content"
                        value={catagory}
                        placeholder="Enter the Catagory"
                        onChange={(e) => setCatagory(e.target.value)}
                        />
                    </Form.Group>
                    {loading && <Loading size={50}/>}
                    <Button type="submit" varient="primary">Create Note</Button>
                    <Button className="mx-2" onClick={resetHandler} varient="danger">Reset Fields</Button>
                </Form>
            </Card.Body>

            <Card.Footer className="text-muted">
                Creating on - {new Date().toLocaleDateString()}
            </Card.Footer>
        </Card>
    </Mainscreen>
);
};

export default CreateNote;
                    