import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const[items,setItem]=React.useState([]);
    function addItem(item){
        setItem((prevValue)=>{
            return [...prevValue,item];
        })
    }
    function deleteItem(index){
        setItem((prevValue)=>{
          return  prevValue.filter((item,idx)=>{
                return idx!==index;
            })
        })
    }
  return (
    <div>
      <Header />
      <CreateArea 
          onChecked={addItem}
      />
      {items.map((item,idx)=>{
        return <Note key={1} id={idx}title={item.title} content={item.content}
        onDelete={deleteItem} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
