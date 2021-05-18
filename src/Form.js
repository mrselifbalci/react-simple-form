import React from 'react';

export default function Form({
   handleSubmit,
   firstname,
   setFirstname,
   lastname,
   setLastname,
   subject,
   setSubject,
   content,
   setContent,
   email,
   setEmail,
   buttonText
  
}) {
return (
        <div className="form-sections">
        <h1>Contact Us</h1> 
        <form className="form" onSubmit={e=>{e.preventDefault();handleSubmit(firstname,lastname,subject,content,email)}}>
           <div className="form-items">
              <label>Firstname</label>
              <input className="form-inputs" value={firstname} onChange={e=>setFirstname(e.target.value)} />
           </div>
           <div className="form-items">
              <label>Lastname</label>
              <input className="form-inputs" value={lastname} onChange={e=>setLastname(e.target.value)}/>
           </div>
           <div className="form-items">
              <label>Subject</label>
              <input className="form-inputs" value={subject} onChange={e=>setSubject(e.target.value)}/>
           </div>
           <div className="form-items">
              <label>Content</label>
              <input className="form-inputs" value={content}  onChange={e=>setContent(e.target.value)}/>
           </div>
           <div className="form-items">
              <label>Email</label>
              <input className="form-inputs" value={email} onChange={e=>setEmail(e.target.value)} />
           </div>
           <button type="submit">{buttonText}</button> 
        </form>
        </div>
    )
}
