import React from "react";

function Note(props){
    function goDelete(event){
        props.onDelete(props.id);
        event.preventDefault();
    }
    return (<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={goDelete}>DELETE</button>
    </div>)
}
export default Note;