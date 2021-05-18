import './App.css';
import Form from './Form';
import List from './List';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');
  const [currentId, setCurrentId] = useState('default');
  const [buttonText,setButtonText]=useState('Submit')


  useEffect(() => {
		axios
			.get('http://localhost:3000/messages')
			.then((res) => {
				setMessages(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

  const handleSubmit=()=>{
    const newMessage ={
      firstname:firstname,
      lastname:lastname,
      subject:subject,
      content:content,
      email:email
    }

    if(currentId==='default'){
      axios.post('http://localhost:3000/messages',newMessage)
    }else{
      axios.put(`http://localhost:3000/messages/${currentId}`,newMessage)
    }
      setFirstname('')
      setLastname('')
      setSubject('')
      setContent('')
      setEmail('')
      setCurrentId('default')
      setButtonText('Submit') 
       
      setTimeout(() => {
        axios
        .get('http://localhost:3000/messages')
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }, 300);
  }

  const handleEdit=(message)=>{
      setFirstname(message.firstname)
      setLastname(message.lastname)
      setSubject(message.subject)
      setContent(message.content)
      setEmail(message.email)
      setCurrentId(message._id) 
      setButtonText('Update')  
  }

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:3000/messages/${id}`)

    setTimeout(() => {
      axios
			.get('http://localhost:3000/messages')
			.then((res) => {
				setMessages(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
    }, 300);

  }

  return ( 
    <div className="app">
      <div className="form-component">
        <Form 
        handleSubmit={handleSubmit}
        firstname={firstname}
        lastname={lastname}
        subject={subject}
        content={content}
        email={email}
        setFirstname={setFirstname}
        setLastname={setLastname}
        setSubject={setSubject}
        setContent={setContent}
        setEmail={setEmail}
        buttonText={buttonText}

        />

      </div>
      
      <div className="list-component">
        {messages.map((message,index)=>
        <List message={message} key={index} 
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
       /> )}
      </div>
      
    </div>
  );
}



export default App;
