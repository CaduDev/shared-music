import React from 'react';

import { useDispatch } from 'react-redux';


import { signInSuccesss } from '../../store/modules/auth/actions'

// import { Container } from './styles';

function SigIn({ history }) {
  const dispatch = useDispatch()
  return <div>sad
    <button onClick={() => {
      dispatch(signInSuccesss());
      history.push('/')
    }}>login</button>
  </div>;
}

export default SigIn;