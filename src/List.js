import React from 'react'

export default function List({message,handleEdit,handleDelete}) {
   
    return (
        <div className="list-items">
            <div className="list-item list-firstname">{`${message.firstname} ${message.lastname}`}</div>
            <div className="list-item" >{message.subject}</div>
            <div className="list-item" >{message.content}</div>
            <div className="list-item" >{message.email}</div>
            <div>
                <button className="list-buttons" onClick={()=>{handleEdit(message)}}>Edit</button>
                <button className="list-buttons" onClick={()=>{handleDelete(message._id)}}>Delete</button>
            </div>
            
        </div>
    )
} 
