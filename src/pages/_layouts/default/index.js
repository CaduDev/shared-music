import React, { useEffect ,useState } from 'react';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux'

import { Wrapper, Scroll } from './styles';

import Header from '../../../components/Header';
import SoundBar from '../../../components/SoundBar';
import NavBar from '../../../components/NavBar';

import { bg } from '../../../assets'
export default function DefaultLayout({ children, match }) {
  const { show } = useSelector(state => state.feedBack);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(key === 0 ? 1: 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  return (
    <>
      <Header match={match} />
      <SoundBar />
      <Scroll 
        options={{ suppressScrollY: show }}
        key={key}
        bg={bg}
      >
        <NavBar />
        <Wrapper>
          {children}
        </Wrapper>
      </Scroll>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
