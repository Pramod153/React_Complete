import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Optional: Clear the form after submit
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="Counter">
      <h2 >Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Name:</label><br />
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-2">
          <label>Email:</label><br />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-2">
          <label>Message:</label><br />
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
