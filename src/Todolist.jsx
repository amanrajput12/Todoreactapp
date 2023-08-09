import React ,{useState} from 'react'

const Todolist = ({val,handleDelete,handleEdit,handleMark,time}) => {
    const [strike,setStrike]=useState(false)
    const handleStrike=()=>{
  setStrike(!strike)
    }

  return (
    <div className='item'>
        <button onClick={handleStrike} className='itembtn'></button>
             <li  onClick={handleMark} style={{textDecoration: strike? "line-through":'none'}}>{val}</li>
             <div>
              {time}
              <button onClick={handleEdit}  className='editbtn' >Edit</button>
                <button onClick={handleDelete} className='closebtn'>X</button>
                </div>
    </div>
  )
}

export default Todolist





