import React, { useEffect, useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { 
  FaPlay,
  FaPause, 
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
const width = window.innerWidth;

function Music() {
  const { currentMusic } = useSelector(state => state.playing);

  useEffect(() => {

    const audioProgress = document.getElementById('audio-progress')
    const progressBar = document.getElementById('progressBar')
    const audioLoader = document.getElementById('audio-loader');
    const music = document.getElementById('music');
    const btnPlay = document.getElementById('play');
    const timer = document.getElementById('current-time');

    function init() {
      const iconPlay = '<svg style="color: #222;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>'
      const iconPause = '<svg style="color: #222;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>'
  
      let intervalTime,
        hour, 
        min, 
        seg, 
        currentHour, 
        currentMin, 
        currentSeg, 
        bufferEnd,
        pctSeek,
        pctBar;

      
      function dragMove(e) {    
        if (e.offsetX <= progressBar.clientWidth) {
          return audioProgress.style.width = String(e.offsetX)+'px';
        }
      }
  
      function dragEnd() {
        progressBar.removeEventListener('mousemove', dragMove);
        progressBar.removeEventListener('mouseup', dragEnd);
  
        // music.play();
  
        btnPlay.innerHTML = iconPause;
  
        intervalTime = setInterval(updateTime, 100);
      }
  
      function dragStart(e) {
        // music.pause();
        clearInterval(intervalTime);
        progressBar.addEventListener('mousemove', dragMove);
        progressBar.addEventListener('mouseup', dragEnd);
      }

      function updateTime(init) {
        if(!init) {
          bufferEnd = music.buffered.end(music.buffered.length - 1)
    
          audioLoader.style.width = String((bufferEnd / music.duration) * 100)+ '%';
    
          pctSeek = (music.currentTime / music.duration) * 100;
    
          audioProgress.style.width = String(pctSeek) + '%'
        }
        
  
        hour = Math.floor(music.duration / 3600);
        min = Math.floor(music.duration / 60)
        seg = Math.floor(((music.duration / 60) % 1) * 60)
  
        currentHour = Math.floor(music.currentTime / 3600);
        currentMin = Math.floor(music.currentTime / 60);
        currentSeg = Math.floor(((music.currentTime / 60) % 1) * 60);
  
        if(currentSeg > 0 && currentSeg < 2) {
          progressBar.style.overflow = 'initial !important'
        }
  
        timer.innerHTML = convertTime(currentHour, currentMin, currentSeg) +
        ' | ' + convertTime(hour, min, seg);
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
  
      function seeker(event) {
        pctBar = (event.offsetX / progressBar.clientWidth) * 100;
        music.currentTime = (music.duration * pctBar) / 100;
  
        currentHour = Math.floor(((music.duration * pctBar) / 100) / 3600);
        currentMin = Math.floor(((music.duration * pctBar) / 100) / 60);
        currentSeg = Math.floor(((((music.duration * pctBar) / 100) / 60) % 1) * 60);
  
        pctSeek = (music.currentTime / music.duration) * 100;
    
        audioProgress.style.width = String(pctSeek) + '%'
  
        timer.innerHTML = convertTime(currentHour, currentMin, currentSeg) +
          ' | ' + convertTime(hour, min, seg);
      }
 
      function play(e) {
        btnPlay.innerHTML = '';
        
        if(music.paused) {
          music.play();
  
          btnPlay.innerHTML = iconPause;
  
          intervalTime = setInterval(updateTime, 100);
        } else {
          music.pause();
  
          btnPlay.innerHTML = iconPlay;
  
          clearInterval(intervalTime);
        }
      }
  
      music.addEventListener('loadeddata', () => {
        audioProgress.addEventListener('mousedown', dragStart);
        progressBar.addEventListener('click', seeker)
        btnPlay.addEventListener('mousedown', play);
      })
    }



    if(currentMusic) {
      init()
    }
    
  }, [currentMusic])


  
  return (
    <>
      <Container>
        <div className="content">
          <div className="meta-music">
            <div className="meta-music-content">
              <div className="cover">
                <img src={currentMusic.album_cover} alt="cover álbum" />
              </div>
              <div className="info">
                <span className="music-name">{currentMusic.title_music}</span>
                <span className="album-name">{currentMusic.title_album}</span>
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
            <button className="item" id="play">
              <FaPlay size={18} color="#222" />
            </button>
            <div className="item"><FaForward size={16} color="#222" /></div>
            <div className="item"><MdOutlineRepeat size={16} color="#999" /></div>
          </div>
          <div className="action-music">
            {currentMusic && <div className="item currentTime" id="current-time">00:00 00:00</div>}
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
        <audio id="music" src={currentMusic?currentMusic.music:''} style={{ display: 'none' }} />
      </Container>
    </>
  );
}

export default Music;