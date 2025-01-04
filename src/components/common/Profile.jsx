import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div
        style={{
          margin: '0 auto',
          textAlign: 'center',
          padding: '10% 0 10% 0',
          height: '75vh',
        }}
      >
        <img src={user.picture} alt={user.name} />
        <h2 style={{
          paddingTop: "5%" 
        }}>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};


export default ProfilePage;