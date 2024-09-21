import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <h1>Welcome to Our E-commerce Store</h1>
      {userInfo ? (
        <div>
          <p>Hello, {userInfo.name}!</p>
          <button onClick={() => navigate('/profile')}>View Profile</button>
          <button onClick={() => navigate('/products')}>Browse Products</button>
        </div>
      ) : (
        <div>
          <p>Please log in or register to start shopping.</p>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Home;