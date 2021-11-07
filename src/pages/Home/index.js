import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { BsPlayCircle, BsPauseCircle ,BsGridFill } from 'react-icons/bs';

import { FaThList, FaRegHeart } from 'react-icons/fa';

import { Container, Card, List } from './styles';

import { posts } from '../../assets/';

import  { change_music } from '../../store/modules/playing/actions';

import  { setPlayed, setFirstPlay } from '../../store/modules/controlsSoudBar/actions';

function Home() {
  const dispatch = useDispatch();
  const { playlist, currentMusic } = useSelector(state => state.playing);
  const [layout, setLayout] = useState('list');
  const [musicPlay, seMusicPlay] = useState(null);
  const { played, firstPlay } = useSelector(state => state.controlsSoudBar);

  function playMusic(res, index) {
    if(currentMusic && currentMusic.id && res.id === currentMusic.id) {
      dispatch(setPlayed(!played))
    } else {
      dispatch(change_music({...res, index}));
      
      console.log({
        firstPlay
      });

      if(firstPlay === null) {
        dispatch(setFirstPlay(false));
      }
    }

    seMusicPlay(musicPlay===index?null: index)
  }

  return (
    <Container>
      <div className="bar-grid">
        <button onClick={() => setLayout(layout==='grid'?'list':'grid')}>
          {layout === 'grid' ? 
            <BsGridFill size={22} color="#999"/>
            : <FaThList size={22} color="#999"/>}
        </button>
      </div>
      {layout==='grid'? (
        <div className={`itens-to-grid`}>
          {posts.map((res, index) => {
            return (
              <Card className="card" bg={res} key={index}>
                <div>
                  <p>Name of music</p>
                  <span>Name of album</span>
                  <div className="cover_lasted_music">
                    <button onClick={() => playMusic(index)}>
                      {index === musicPlay? (
                        <BsPauseCircle size={'100%'} color="#8379b947"/>
                      ): (
                        <BsPlayCircle size={'100%'} color="#8379b947"/>
                      )}
                    </button>
                    <button className="liked">
                      <FaRegHeart size={24} color="#877eb8" />
                    </button>
                  </div>
                  {index === musicPlay && (
                    <svg className="equilizer equilizer-animation" viewBox="0 0 60 60">
                      <g>
                        <title>Audio Equilizer</title>
                        <rect className="bar" transform="translate(0,0)" y="-12" x="14"></rect>
                        <rect className="bar" transform="translate(8,0)" y="-12" x="14"></rect>
                        <rect className="bar" transform="translate(16,0)" y="-12" x="14"></rect>
                        <rect className="bar" transform="translate(24,0)" y="-12" x="14"></rect>
                        <rect className="bar" transform="translate(32,0)" y="-12" x="14"></rect>
                      </g>
                    </svg>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      ):(
        <div className={`itens-to-list`}>
          {
            playlist.map((res, index) => {
              return (
                <List key={index} bg={res.album_cover} onDoubleClick={() => playMusic(res,index)}>
                  <div 
                    className={currentMusic && res.id === currentMusic.id?'status-play active': 'status-play'}
                    onClick={() => playMusic(res, index)}
                  >
                    <span>
                      {currentMusic && res.id === currentMusic.id? 
                        played?(
                          <BsPauseCircle size={24} color="#888"/>
                        ):(
                          <BsPlayCircle size={24} color="#888"/>
                        )
                      :(
                        <BsPlayCircle size={24} color="#888"/>
                      )}
                    </span>
                    <span>
                      {index+1}
                    </span>
                  </div>
                  <div className="cover-album"></div>
                  <div className="info">
                    <span className="name-music">{res.title_music}</span>
                    <span className="name-album">{res.title_album}</span>
                  </div>
                  <div className="data">
                    4 de nov. de 2020
                  </div>
                  <div className="status">
                    <FaRegHeart />
                  </div>
                  <div className="time">4:32</div>
                  <div className="animtaion">
                    {played && index === musicPlay && (
                      <svg className="equilizer equilizer-animation" viewBox="0 0 60 60">
                        <g>
                          <title>Audio Equilizer</title>
                          <rect className="bar" transform="translate(0,0)" y="0"></rect>
                          <rect className="bar" transform="translate(8,0)" y="0"></rect>
                          <rect className="bar" transform="translate(16,0)" y="0"></rect>
                          <rect className="bar" transform="translate(24,0)" y="0"></rect>
                          <rect className="bar" transform="translate(32,0)" y="0"></rect>
                        </g>
                      </svg>
                    )}
                  </div>
                </List>
              )
            })
          }
        </div>
      )}
    </Container>
  );
}

export default Home;