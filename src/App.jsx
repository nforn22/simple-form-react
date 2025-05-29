import React, { useState } from 'react';
import Form from './components/Form/Form';
import ValidateForm from './components/ValidateForm/ValidateForm';
import Footer from './components/Footer/Footer';
import { BsFileText } from "react-icons/bs";
import './App.css'


function App() {
  const [userData, setUserData] = useState({name: '', email: '', password: '', confirmPassword: ''})
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target
    setUserData({ ...userData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match')
      return;
    }
    setIsSubmitted(true) 
  };

  const handleEdit = () => {
    setIsSubmitted(false)
  }

  return (
    <div className="app">
      <h1 className="form-title">
      {isSubmitted ? 'User Summary' : 'Register Form'}
      </h1>

      {!isSubmitted ? (
        <Form 
          userData={userData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <ValidateForm userData={userData} onEdit={handleEdit} />
      )}
      <Footer />
    </div>
  )
}

export default App
