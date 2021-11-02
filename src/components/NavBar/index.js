import React from 'react';

import { CgMusic, CgMusicNote, CgPlayButtonO } from 'react-icons/cg';
import { GiNewspaper } from 'react-icons/gi';
import { BsMusicNoteList, BsFillLayersFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import { Container } from './styles';

function NavBar() {
  return (
    <Container>
      <div>
        <Link to="/" className="selected"><CgMusic size={20} color="#fff" />Últimas tocadas</Link>
      </div>
      <div>
        <Link to="/"><GiNewspaper size={20} color="#fff" />Notícias</Link>
      </div>
      <div>
        <Link to="/"><CgMusicNote size={20} color="#fff" />Novas músicas</Link>
      </div>
      <div>
        <Link to="/"><BsMusicNoteList size={20} color="#fff" />Playlists</Link>
      </div>
      <div>
        <Link to="/"><BsFillLayersFill size={20} color="#fff" />Gêneros</Link>
      </div>
      <div>
        <Link to="/"><CgPlayButtonO size={20} color="#fff" />Vídeos</Link>
      </div>
    </Container>
  );
}

export default NavBar;