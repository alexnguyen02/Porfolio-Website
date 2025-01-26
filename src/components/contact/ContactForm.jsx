import './ContactForm.css'; 
import { useState } from 'react'; 

const ContactForm = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 

  const handleNameInput = (e) => {
    setName(e.target.value); 
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value); 
  }

  const handleMessageInput = (e) => {
    setMessage(e.target.value); 
  }

  return (
    <div className='contact-form'>
      <form action="https://formsubmit.co/285a2c4a3d97f99cf063fb1126c1e789" method="POST">
        <input type="hidden" name="_template" value="box"/>
        
        {/* Name input field */}
        <label className='name-label' htmlFor='nameInfo'>Name</label>
        <input type='text' value={name} name='name' className='name' id='nameInfo' onChange={handleNameInput} required/>
        {/* Email input field */}
        <label className='email-label' htmlFor='emailInfo'>Email</label>
        <input type='email' value={email} name='email' className='email' id='emailInfo' onChange={handleEmailInput} required/>
        {/* Message input field */}
        <label className='message-label' htmlFor='messageInfo'>Message</label>
        <textarea id='message' name='message' value={message} onChange={handleMessageInput} className='message' required/>
        <button type='submit' className='form-button'>Send</button>
      </form>
    </div>
  ); 
}

export default ContactForm; 