import React from 'react';

import { Link } from 'react-router-dom';

import { FaSearch, FaRegBell } from 'react-icons/fa'

import { Container } from './styles';

import { logo, avatar1 } from '../../assets/'

function Header({ match: { path } }) {
  return (
    <Container>
      <div className="nav">
        <Link 
          to="/a" 
          style={{
            color: path === '/home'? '#b3aae2' : '#333'
          }}
        >Home</Link>
        <Link to="/b">Radio</Link>
        <Link to="/c">Store</Link>
        <Link to="/d">Library</Link>
        <button type="button"></button>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="other">
        <div className="content-other">
          <div className="item">
            <FaSearch size={20} color="#333" />
          </div>
          <div className="item">
            <FaRegBell className="bell" size={20} color="#333" />
            <span className="dot"></span>
          </div>
          <div className="item-user">
            <div className="avatar">
              <img src={avatar1} alt="user" />
            </div>
            <div className="name">
              <span>Paola Fernandes</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;