import React, { useEffect, useState } from 'react'
import Todolist from './Todolist'

const Todo = () => {

  const getLocalItems = () => {
    let lists = localStorage.getItem('lists');
    if (lists) {
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
    }
  };
    const [value,setValue]=useState('')
    const [todo,setTodo]=useState(getLocalItems())
    const [isEditing, setIsEditing] = useState(false); 
    const [editValue, setEditValue] = useState(-1); 
    
    
 
  

  
    useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(todo));
    }, [todo]);
  
      const handleChange =(e)=>{
      setValue(e.target.value)
    }
    const handleAdd=()=>{
        if(value.trim()!==''){
             const updateTodo =[...todo,value]
             setTodo(updateTodo)
             setValue('')  
          
        }
      
    }
    // const getTimeString =()=>{
    //   const date =new Date()
    //   return date.toLocaleTimeString()
    // }
     
      const handleDelete=(index)=>{
         console.log(index);
         const updateTodo = [...todo]
         updateTodo.splice(index,1);
         setTodo(updateTodo)
         
      }
      const handleEdit=(Item,index)=>{
        console.log(index);
      setValue(Item)
      setEditValue(index)
      setIsEditing(true)
      }
      const handleSaveEdit=()=>{
        if(value.trim()!==''){
        const updateTodo =[...todo]
        updateTodo[editValue]=value
        setTodo(updateTodo)
        setEditValue(-1)
        setIsEditing(false)
        setValue('')
        }
      }
      const handleEnter=(e)=>{
        if(isEditing && e.key=="Enter"){
          handleSaveEdit()
        }
        else if (e.key=="Enter"){
          handleAdd()
        }
      }
      const handleMark=(index,e)=>{
        console.log(index);
    const updateTodo =[...todo]
    if(index!==0){
      const [moveItem]=updateTodo.splice(index,1)
      updateTodo.unshift(moveItem)
      setTodo(updateTodo)

      
    }
 
      }

     
  

            
  return (
    <div > 
        <h1>Todo App</h1>
        <input onKeyDown={handleEnter} type="text"   placeholder='Todo' value={value} onChange={handleChange} />
        <button  className='Addbtn' onClick={isEditing ? () => handleSaveEdit() : () => handleAdd()} >{isEditing?"Edit":"Add"}</button>
         
            { todo.map((Item,index)=>  {
               return < Todolist  time={Item.time}   handleEdit={()=>handleEdit(Item,index)}  handleMark={()=>handleMark(index)}   handleDelete={()=>handleDelete(index)} val ={Item} key={index} /> 
 } )}
            
    </div>
  )
}

export default Todo