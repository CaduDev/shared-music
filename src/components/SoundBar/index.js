import React, { useEffect, useState } from 'react';

import { 
  FaPlay, 
  FaHeart, 
  FaRegHeart, 
  FaRandom, 
  FaListUl,
  FaBackward,
  FaForward
} from 'react-icons/fa';

import { HiOutlineDotsVertical } from 'react-icons/hi';
// eslint-disable-next-line no-unused-vars
import { MdOutlineRepeatOne, MdOutlineRepeat } from 'react-icons/md';
// eslint-disable-next-line no-unused-vars
import { ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';

import { Container } from './styles';

import { edSheeran, nancyMulligan } from '../../assets'

import { 
  play, 
  pause,
  volumeHight,
  volumeLow,
  volumeMedium,
  volumeMute 
} from '../../assets/icons'

function Music() {
  const [pct, setPct] = useState('0.00');

  useEffect(() => {
    const width = window.innerWidth;

    if(!localStorage.getItem('volume')) {
      localStorage.setItem('volume', 1);
    }
    
    if(localStorage.getItem('muted') === null) {
      localStorage.setItem('muted', false);
    }

    const music = document.getElementById('music');
    const playAndPause = document.getElementById('play');
    const currentTime = document.getElementById('currentTime');
    const progressBar = document.getElementById('progressBar');
    const audioProgress = document.getElementById('audio-progress');
    const volumeIcon = document.getElementById('volume-icon');
    const sliderVol = document.getElementById('slider-vol');

    music.volume = localStorage.getItem('volume');
    sliderVol.value = localStorage.getItem('volume');

    let intervalTime,
      hour,
      min,
      seg,
      currentHour,
      currentMin,
      currentSeg,
      videoLoader,
      pctSeek,
      pctBar = null;
    
    let statusPlayPauseMusic = false

      
    function dragMove(e) {    
      if(width<800) {
        if (e.changedTouches[0].clientX <= progressBar.clientWidth) {
          pctBar = (e.changedTouches[0].clientX / progressBar.clientWidth) * 100;
          music.currentTime = (music.duration * pctBar) / 100;
          
          return audioProgress.style.width = String(e.changedTouches[0].clientX)+'px';
        }
      } else {
        pctBar = (e.offsetX / progressBar.clientWidth) * 100;
        // music.currentTime = (music.duration * pctBar) / 100;
        
        return audioProgress.style.width = String(e.offsetX)+'px';     
      }
    }
  
    function dragEnd() {
      progressBar.removeEventListener('mousemove', dragMove);
      progressBar.removeEventListener('mouseup', dragEnd);
  
      progressBar.removeEventListener('touchmove', dragMove);
      progressBar.removeEventListener('touchend', dragEnd);
  
      if(statusPlayPauseMusic) {
        playAndPause.innerHTML = pause;
      }
  
      music.currentTime = (music.duration * pctBar) / 100;
      intervalTime = setInterval(updateTime, 100);
    }
  
    function dragStart(e) {  
      clearInterval(intervalTime);
  
      if(width>800) {
        progressBar.addEventListener('mousemove', dragMove);
        progressBar.addEventListener('mouseup', dragEnd);
      } else {      
        progressBar.addEventListener('touchmove', dragMove);
        progressBar.addEventListener('touchend', dragEnd);
      }
    }

    function setPlayAndPause(e) {   
      if(music.paused) {
        music.play();
        playAndPause.innerHTML = pause;

        intervalTime = setInterval(updateTime, 100);
      } else {
        music.pause();  
        playAndPause.innerHTML = play;
  
        clearInterval(intervalTime);
      }
    }

    function updateTime(init) {
      

      if(!init) {    
        pctSeek = (music.currentTime / music.duration) * 100;
  
        audioProgress.style.width = String(pctSeek) + '%'
      }
      
      hour = Math.floor(music.duration / 3600);
      min = Math.floor(music.duration / 60)
      seg = Math.floor(((music.duration / 60) % 1) * 60)
  
      currentHour = Math.floor(music.currentTime / 3600);
      currentMin = Math.floor(music.currentTime / 60);
      currentSeg = Math.floor(((music.currentTime / 60) % 1) * 60);
  
      currentTime.innerHTML = convertTime(currentHour, currentMin, currentSeg) +
      ' / ' + convertTime(hour, min, seg);
    }
  
    function convertTime(horas, minutos, segundos) {
      if(horas < 10 && horas > 0) {
        horas = '0' + String(horas) + ":";
      } else {
        horas = '';
      }
  
      if(minutos < 10) {
        minutos = '0' + String(minutos);
      } else if(minutos > 59){
        minutos = minutos - (Math.floor(minutos/60) *60);
      }
  
      if(segundos < 10) {
        segundos = '0' + String(segundos);
      }
  
      return String(horas) + String(minutos) + ':' + String(segundos)
    }

    function changeVolume(e) {

      let icon = ''
      const volToNumer = parseFloat(e.target.value); 
      const mutedStatus = JSON.parse(localStorage.getItem('muted'));
  
      if(mutedStatus) {
        icon = volumeMute
      } else {
        if(volToNumer > 0.74) {
          icon = volumeHight
        } else if (volToNumer > 0.24 && volToNumer < 0.75) {
          icon = volumeMedium
        } else if (volToNumer > 0.01 && volToNumer < 0.25) {
          icon = volumeLow 
        } else if (volToNumer === 0) {
          icon = volumeMute
        }
      }
  
      music.volume = volToNumer
      localStorage.setItem('volume', volToNumer)
      volumeIcon.innerHTML = icon;
    }

    if(width > 800) {
      audioProgress.addEventListener('mousedown', dragStart);
    } else {
      audioProgress.addEventListener('touchstart', dragStart);
    }   

    playAndPause.addEventListener('click', setPlayAndPause)
    sliderVol.addEventListener('input', changeVolume);
  }, [])
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
            <div className="item" id="play"><FaPlay size={18} color="#222" /></div>
            <div className="item"><FaForward size={16} color="#222" /></div>
            <div className="item"><MdOutlineRepeat size={16} color="#999" /></div>
          </div>
          <div className="action-music">
            <div className="item currentTime" id="currentTime">00:00 00:00</div>
            <div className="item"><FaListUl size={16} color="#999" /></div>
            <div className="item volume-input">
              <div className="item volume-icon" id="volume-icon">
                <ImVolumeHigh size={16} color="#999" />
              </div>
              <input 
                className="mdl-slider mdl-js-slider" 
                id="slider-vol"
                type="range"
                step="0.01"
                min="0" 
                max="1" 
              />
            </div>
          </div>
        </div>
        <div id="progressBar" class="progress-bar float-left">
          <div id="audio-loader" class="audio-loader"></div>
          <div id="audio-progress" class="audio-progress"></div>
        </div>
        <audio id="music" src={nancyMulligan} style={{ display: 'none' }} />
      </Container>
    </>
  );
}

export default Music;