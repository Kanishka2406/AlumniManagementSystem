import React, { useState } from 'react';
import './App.css';

function Jobs() {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [type, setType] = useState('Job'); // Job or Internship
  const [location, setLocation] = useState('');
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title || !company || !location) {
      return setError('Please fill all required fields.');
    }

    const newOffer = {
      id: Date.now(),
      title,
      company,
      type,
      location
    };

    setOffers([newOffer, ...offers]);
    setSuccess('Offer posted successfully!');
    setTitle('');
    setCompany('');
    setType('Job');
    setLocation('');
  };

  const handleDelete = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  return (
    <div className="page-container">
      <h2>Post Job / Internship</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Position / Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Job</option>
          <option>Internship</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Post Offer</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </form>

      <h3>Posted Offers</h3>
      <ul className="offer-list">
        {offers.map(offer => (
          <li key={offer.id} className="event-card">
            <span>
              <strong>{offer.title}</strong> — {offer.company} — {offer.type} — {offer.location}
            </span>
            <button className="danger" onClick={() => handleDelete(offer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
