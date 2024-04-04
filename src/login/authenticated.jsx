import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('username');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.username}</div>
      <Button variant='primary' onClick={() => navigate('/chat')}>
        Chat
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}