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
      <form>
        <label className='name-label' htmlFor='name'>Name</label>
        <input type='text' value={name} onChange={handleNameInput} className='name-input' id='name'/>
        <label className='email-label' htmlFor='email'>Email</label>
        <input type='email' value={email} onChange={handleEmailInput} className='email-input' id='email'/>
        <label className='message-label' htmlFor='message'>Message</label>
        <textarea id='message' name='message' value={message} onChange={handleMessageInput} className='message-input'/>
      </form>
      <button type='submit' className='form-button'>Send</button>
    </div>
  ); 
}

export default ContactForm; 