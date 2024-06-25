import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 80px;
  text-align: center;
  background-color:black;
  color:white;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  padding: 15px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 15px;
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <ContactWrapper>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
