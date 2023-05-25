import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

const [name,setName] = useState("") 
const [email,setEmail] = useState("") 
const [subject,setSubject] = useState("") 
const [message,setMessage] = useState("") 

const handelchangeName = (e)=>{
      setName(e.target.value)
}
const handelchangeEmail = (e)=>{
      setEmail(e.target.value)
}
const handelchangeSujet = (e)=>{
      setSubject(e.target.value)
}
const handelchangeMessage = (e)=>{
      setMessage(e.target.value)
}

const  submit= (e)=>{
      e.preventDefault()
      emailjs.send('service_ulmlpa8', 'template_9dslr2h',
      {
            'to_name' : name,
            'to_email': email,
            'to_Subject': subject,
            'message': message

      }, 
      'VcvOoocIa3WIvaCRT')
      .then(()=>{
            toast.success('Votre message est bien envoyer!' , {duration: 6000});
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
      }).catch(()=>{toast.error("Lemessage n'est pas envoyer pour le moment, resseyer plus-tard")})

}


  return (
    <>
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 offset-md-3">
            <form onSubmit={submit}>
                  <div className="row">
                        <p className='fw-bold fs-3 text-center text-white'>Contact us</p>
                      <div className="form-group mt-3"> 
                            <input type="text" name="name" value={name} className="form-control" id="name" placeholder="Your Name" required onChange={handelchangeName} />
                      </div>
                      <div className="form-group mt-3">
                            <input type="email" className="form-control" name="email" value={email} id="email" placeholder="Your Email" required onChange={handelchangeEmail}/>
                      </div>
                      <div className="form-group mt-3"> 
                            <input type="text" className="form-control" name="subject" value={subject} id="subject" placeholder="Subject" required onChange={handelchangeSujet}/>
                      </div>
                      <div className="form-group mt-3">
                            <textarea className="form-control" name="message" value={message} rows="5" placeholder="Message" required onChange={handelchangeMessage}></textarea>
                      </div>
                      <div className="text-center mt-3">
                            <button type="submit" className="rounded-pill px-4 py-2 fw-bold" >Send Message</button>
                            <Toaster position="top-right" reverseOrder={false}/>
                      </div>
                  </div>    
              </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact