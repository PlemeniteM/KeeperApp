import React from "react";

function CreateArea(props) {
    const[todo,setTodo]=React.useState({
        title:"",
        content:""
    });
    
    function handleChange(event){
        const {name,value}=event.target

        setTodo((prevValue)=>{
            if(name==="title"){
                 return {
                     title:value,
                     content:prevValue.content
                 }
            }
            else if(name==="content"){
                return {
                    title:prevValue.title,
                    content:value
                }
                  
            }
        })
    }
    function addNote(event){
        props.onChecked(todo);
        setTodo({title:"",content:""})
        event.preventDefault();
    }
    function addItem(item){
        console.alert(item.title,item.content);
    }
    
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={todo.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={todo.content} />
        <button  onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
