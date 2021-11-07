import React, { useEffect, useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { 
  FaPlay,
  FaPause, 
  // eslint-disable-next-line no-unused-vars
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

import { 
  changeVolume,
  setMuteValue,
  setAudioProgressWidth,
  setCurrentTime,
  setPlayed,
  setFirstPlay,
  setChangeRepeat
} from '../../store/modules/controlsSoudBar/actions';

import  { change_music } from '../../store/modules/playing/actions';

function Music() {
  const dispatch = useDispatch();
  const musicPlayer = useRef();
  const { playlist, currentMusic } = useSelector(state => state.playing);
  const { vol, mute, audioProgressWidth, currentTime, played, firstPlay, repeat } = useSelector(state => state.controlsSoudBar);

  const [draggable, setDraggable] = useState(false);
  const [updateInterval, setUpdateInterval] = useState(null);
  const [initSytem, setInitSystem] = useState(false)
  const [volIcon, setVolIcon] = useState()

  useEffect(() => {
    dispatch(setPlayed(false))
    setUpdateInterval(clearInterval(updateInterval)); 

    if(initSytem) {
      dispatch(setCurrentTime({
        currentOriginal: 0,
        currentConverted: '00:00 00:00'
      }))
      dispatch(setAudioProgressWidth('0%'))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMusic.music]);

  useEffect(() => {
    let icon = ''
    const volToNumer = parseFloat(vol); 

    if(mute) {
      icon = <ImVolumeMute2 color="#999999" size={18} />
    } else {
      if(volToNumer > 0.74) {
        icon = <ImVolumeHigh color="#999999" size={18} />
      } else if (volToNumer > 0.24 && volToNumer < 0.75) {
        icon = <ImVolumeMedium color="#999999" size={18} />
      } else if (volToNumer > 0.01 && volToNumer < 0.25) {
        icon = <ImVolumeLow color="#999999" size={18} />
      } else if (volToNumer === 0) {
        icon = <ImVolumeMute2 color="#999999" size={18} /> 
      }
    }

    setVolIcon(icon)
  }, [vol, mute]);

  useEffect(() => {
    if(initSytem) {
      if(played) {
        musicPlayer.current.play();
      } else {
        musicPlayer.current.pause();
        setUpdateInterval(clearInterval(updateInterval));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [played]);

  useEffect(() => {
    if(firstPlay === false) {
      startMusic(true);
      dispatch(setFirstPlay(true))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstPlay]);
   
  function dragMove(e) {  
    const progressBar = document.getElementById('progressBar')
    
    if (e.clientX <= progressBar.clientWidth) {
      setUpdateInterval(clearInterval(updateInterval))
      dispatch(setAudioProgressWidth(String(e.clientX)+'px'));
    }
  }
  
  function loadMusic() {
    musicPlayer.current.volume = vol;
    musicPlayer.current.muted = mute;
    musicPlayer.current.currentTime = currentTime.currentOriginal;

    if(initSytem) {
      musicPlayer.current.play();
      dispatch(setPlayed(true))
      setUpdateInterval(setInterval(updateTime, 200))
    } else {
      setInitSystem(true);
    }
  }

  function updateTime() {
    const music = musicPlayer.current;

    let pctSeek = (music.currentTime / music.duration) * 100;

    dispatch(setAudioProgressWidth(String(pctSeek) + '%'));

    let hour = Math.floor(music.duration / 3600);
    let min = Math.floor(music.duration / 60)
    let seg = Math.floor(((music.duration / 60) % 1) * 60)
    
  
    let currentHour = Math.floor(music.currentTime / 3600);
    let currentMin = Math.floor(music.currentTime / 60);
    let currentSeg = Math.floor(((music.currentTime / 60) % 1) * 60);
  
    dispatch(setCurrentTime({
      currentOriginal: music.currentTime,
      currentConverted:convertTime(currentHour, currentMin, currentSeg) +
        ' | ' + convertTime(hour, min, seg)
    }));
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

  function startMusic(status) { 
    const music = musicPlayer.current

    if(status) {
      music.play();
      dispatch(setPlayed(true))  
      setUpdateInterval(setInterval(updateTime, 100));
      return true;
    }

    if(music.paused) {
      music.play();
      dispatch(setPlayed(true))  
      setUpdateInterval(setInterval(updateTime, 100));
    } else {
      music.pause();
      dispatch(setPlayed(false));
      setUpdateInterval(clearInterval(updateInterval))
    }
  }

  function seeker(event) {
    const progressBar = document.getElementById('progressBar');
    const music = musicPlayer.current;

    let pctBar = (event.clientX / progressBar.clientWidth) * 100;
    music.currentTime = (music.duration * pctBar) / 100;

    let hour = Math.floor(music.duration / 3600);
    let min = Math.floor(music.duration / 60)
    let seg = Math.floor(((music.duration / 60) % 1) * 60)
  
    let currentHour = Math.floor(((music.duration * pctBar) / 100) / 3600);
    let currentMin = Math.floor(((music.duration * pctBar) / 100) / 60);
    let currentSeg = Math.floor(((((music.duration * pctBar) / 100) / 60) % 1) * 60);
  
    let pctSeek = (music.currentTime / music.duration) * 100;
  
    dispatch(setAudioProgressWidth(String(pctSeek) + '%'));
  
    dispatch(setCurrentTime({
      currentOriginal: music.currentTime,
      currentConverted:convertTime(currentHour, currentMin, currentSeg) +
        ' | ' + convertTime(hour, min, seg)
    }));
  }

  function changeMudeState() {
    const music = musicPlayer.current;
    
    music.muted  = !mute;
    dispatch(setMuteValue(!mute));
  }

  function nextTrack() {
    if(currentMusic && playlist[currentMusic.index+1]) {
      dispatch(change_music({ 
        ...playlist[currentMusic.index+1],
        index: currentMusic.index+1
      }));
    }
  }

  function previousTrack() {
    if(currentMusic && playlist[currentMusic.index-1]) {
      dispatch(change_music({ 
        ...playlist[currentMusic.index-1],
        index: currentMusic.index-1
      }));
    }    
  }

  function iconRepeat() {
    let icon = <MdOutlineRepeat size={16} color="#999" />

    switch(repeat) {
      case 'none':
        icon = <MdOutlineRepeat size={16} color="#999" />
      break;
      case 'single':
        icon = <MdOutlineRepeatOne size={16} color="#a68ee9" />
      break;
      case 'playlist':
        icon = <MdOutlineRepeat size={16} color="#a68ee9" />
      break;
      default:
        icon = <MdOutlineRepeat size={16} color="#999" />
    }

    return icon
  }
  
  return (
    <>
      <Container>
        <div className="content">
          <div className="meta-music">
            <div className="meta-music-content">
              <div className="cover">
                <img src={currentMusic?currentMusic.album_cover:''} alt="cover álbum" />
              </div>
              <div className="info">
                <span className="music-name">{currentMusic? currentMusic.title_music:''}</span>
                <span className="album-name">{currentMusic?currentMusic.title_album:''}</span>
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
            <button className="item">
              <FaRandom size={16} color="#999" />
            </button>
            <button className="item" onClick={() => previousTrack()} disabled={!(currentMusic && playlist[currentMusic.index-1])}>
              <FaBackward size={16} color="#222" /></button>
            <button className="item" onClick={() => startMusic()}>
              {played? <FaPause size={18} color="#222" />: <FaPlay size={18} color="#222" />}
            </button>
            <button className="item" onClick={() => nextTrack()} disabled={!(currentMusic && playlist[currentMusic.index+1])}>
              <FaForward size={16} color="#222" />
            </button>
            <button className="item repeat" onClick={() => {
              dispatch(setChangeRepeat(
                repeat==='none'?'playlist':repeat==='playlist'?'single':'none'
              ))
            }}>
              {iconRepeat()}                          
              {repeat !== 'none' && <span />}
            </button>
          </div>
          <div className="action-music">
            <div className="item currentTime">{currentTime.currentConverted}</div>
            <div className="item"><FaListUl size={16} color="#999" /></div>
            <div className="item volume-input">
              <button className="item volume-icon" onClick={() => changeMudeState()}>
                {volIcon}
              </button>
              <input 
                className="mdl-slider mdl-js-slider" 
                id="slider-vol"
                type="range"
                step="0.01"
                min="0" 
                max="1" 
                value={vol}
                onChange={(e) => {                  
                  dispatch(changeVolume(e.target.value));
                  
                  if(mute) {
                    dispatch(setMuteValue(false))
                  }

                  musicPlayer.current.muted  = false;
                  musicPlayer.current.volume =e.target.value; 
                }}
              />
            </div>
          </div>
        </div>
        <div 
          id="progressBar" 
          className="progress-bar float-left"
          onMouseMove={(e) => draggable?dragMove(e):{}}
          onClick={e => seeker(e)}
        >
          <div className="audio-loader"></div>
          <div  
            className="audio-progress" 
            style={{ width: audioProgressWidth }}
            onMouseDown={(e) => setDraggable(true)}
            onMouseUp={() =>  {
              setUpdateInterval(setInterval(updateTime, 100));
              setDraggable(false)
            }}
          />
        </div>
        <audio 
          ref={musicPlayer}
          onEnded={() => {
            if(repeat==='single') {
              musicPlayer.current.play();
            } else if(repeat ==='playlist') {
              if(currentMusic && (currentMusic.index === playlist.length-1)) {
                dispatch(change_music({ 
                  ...playlist[0],
                  index: 0
                }));
              }else {
                dispatch(change_music({ 
                  ...playlist[currentMusic.index+1],
                  index: currentMusic.index+1
                }));
              } 
            } else {
              if(currentMusic && playlist[currentMusic.index+1]) {
                dispatch(change_music({ 
                  ...playlist[currentMusic.index+1],
                  index: currentMusic.index+1
                }));
              } else {
                dispatch(setPlayed(false))
                setUpdateInterval(clearInterval(updateInterval)); 
              }
            }
          }}
          src={currentMusic?currentMusic.music:''} 
          style={{ display: 'none' }} 
          onLoadedData={() => loadMusic()}
        />
      </Container>
    </>
  );
}

export default Music;