import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaSearch, FaRegBell } from 'react-icons/fa';

import { GrClose } from 'react-icons/gr';

import { Container } from './styles';

import { logo, avatar1 } from '../../assets/'

function Header({ match: { path } }) {
  const [show, setShow] = useState(false)
  return (
    <Container>
      {show && (
        <div className="search">
          <input type="text" placeholder="Pesquisar..." />
          <button onClick={() => setShow(false)}>
            <GrClose size={16} color="#877eb8"/>
          </button>
        </div>
      )}
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
        {/* <button type="button"></button> */}
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="other">
        <div className="content-other">
          <div className="item">
            <FaSearch size={20} color="#333" onClick={() => setShow(true)} />
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