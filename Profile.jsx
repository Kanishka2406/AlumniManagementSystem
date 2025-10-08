import React from 'react';

function Profile({ user }) {
  if (!user) return <p>No profile data available.</p>;

  return (
    <div className="page-container">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Batch:</strong> {user.batch}</p>
    </div>
  );
}

export default Profile;
