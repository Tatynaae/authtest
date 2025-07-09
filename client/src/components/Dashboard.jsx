import React from 'react'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
  return (
    <div>
        <h1>Welcome!</h1>
        <Button type="primary" onClick={logout}>Logout</Button>
    </div>
  )
}
