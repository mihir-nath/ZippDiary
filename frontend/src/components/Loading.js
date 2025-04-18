import { Spinner } from "react-bootstrap";

const Loading =() =>{
    return (
    <div 
        style={
            {
                display:"flex",
                justifyContent:"center",
                alignItem:"center",
                width:"100%",
                height:"100%",

            }
        }>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    )
};

export default Loading;