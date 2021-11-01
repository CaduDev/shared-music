import React from 'react';

import { 
  FaPlay, 
  FaHeart, 
  FaRegHeart, 
  FaShareAlt, 
  FaRandom, 
  FaListUl,
  FaBackward,
  FaForward
} from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineRepeatOne, MdOutlineRepeat } from 'react-icons/md';
import { ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';

import { Container } from './styles';

import { edSheeran } from '../../assets'

function Music() {
  return (
    <>
      <Container>
        <div className="content">
          <div className="meta-music">
            <div className="meta-music-content">
              <div className="cover">
                <img src={edSheeran} alt="cover álbum" />
              </div>
              <div className="info">
                <span className="music-name">Nancy Mulligan</span>
                <span className="album-name">Divide</span>
              </div>
            </div>
            <div className="actions">
              <button type="button">
                <FaRegHeart size={16} color="#999" />
              </button>
              <button type="button">
                <HiOutlineDotsVertical size={16} color="#999" />
              </button>
            </div>
          </div>
          <div className="actions-player">
            <div className="item"><FaRandom size={16} color="#999" /></div>
            <div className="item"><FaBackward size={16} color="#222" /></div>
            <div className="item"><FaPlay size={18} color="#222" /></div>
            <div className="item"><FaForward size={16} color="#222" /></div>
            <div className="item"><MdOutlineRepeat size={16} color="#999" /></div>
          </div>
          <div className="action-music">
            <div className="item currentTime">00:00 00:00</div>
            <div className="item"><FaListUl size={16} color="#999" /></div>
            <div className="item volume-input">
              <div className="item volume-icon">
                <ImVolumeHigh size={16} color="#999" />
              </div>
              <input 
                className="mdl-slider mdl-js-slider" 
                type="range"
                min="0" 
                max="100" 
                tabindex="0"
              />
            </div>
          </div>
        </div>
        <input 
          className="mdl-slider mdl-js-slider" 
          type="range"
          min="0" 
          max="100" 
          tabindex="0"
        />
      </Container>
    </>
  );
}

export default Music;