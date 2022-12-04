import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
const Email = () => {
  //states
  const [newName,setNewName]=useState('');
  const [newEmail,setNewEmail]=useState('');
  const [newMessage,setNewMessage]=useState('');
  const [msgStatus,setMsgStatus]=useState('');

  //handlers
  const onNameChangeHandler=(event)=>{
    setNewName(event.target.value);
  }
  const onEmailChangeHandler=(event)=>{
    setNewEmail(event.target.value);
  }
  const onMessageChangeHandler=(event)=>{
    setNewMessage(event.target.value);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(newName === ''||newEmail===''||newMessage===''){
      setMsgStatus('Please complete the empty fields');
    }else{

      //proceed to send message
    emailjs.sendForm('service_xykuslm', 'template_aj1q97o', form.current, 'pTcReyc3M_O8uT4Tx')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been sent');
          setMsgStatus('Message Sent');
          //clear form
          setNewName('');
          setNewEmail('');
          setNewMessage('');
      }, (error) => {
          console.log(error.text);
          alert('Sending message failed, please check your internet connection');
          setMsgStatus('Message sending failed, check internet connection');
      });
    
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      
      <input 
        type="text" 
        name="user_name" 
        placeholder='Name of Recipient'
        value={newName}
        onChange={onNameChangeHandler}
        />
      <label>Email</label>
      <input 
        type="email" 
        name="user_email" 
        placeholder='Email of Recipient'
        value={newEmail}
        onChange={onEmailChangeHandler}
        />
      <label>Message</label>
      <textarea 
        name="message" 
        placeholder='Your message here...'
        value={newMessage}
        onChange={onMessageChangeHandler}
        />
      <input type="submit" value="Send" className='send-button' />
      <small>{msgStatus}</small>
    </form>
  );
};
export default Email;