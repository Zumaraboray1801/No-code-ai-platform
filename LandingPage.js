import React, { useState } from 'react';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>No-Code AI Platform</h1>
      <p>Join our waitlist to get early access!</p>
      {submitted ? (
        <p style={{ color: 'green' }}>Thanks! You're on the waitlist.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Join</button>
        </form>
      )}
    </div>
  );
}

export default LandingPage;