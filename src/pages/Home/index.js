import React, { useState } from 'react';

import { BsPlayCircle, BsGridFill } from 'react-icons/bs';

import { FaThList, FaRegHeart } from 'react-icons/fa';

import { Container, Card, List } from './styles';

import { posts } from '../../assets/';

function Home() {
  const [layout, setLayout] = useState('grid');

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
                    <button>
                      <BsPlayCircle size={'100%'} color="#8379b947" />
                    </button>
                  </div>
                  {index === 1 && (
                    <svg class="equilizer equilizer-animation" viewBox="0 0 60 60">
                      <g>
                        <title>Audio Equilizer</title>
                        <rect class="bar" transform="translate(0,0)" y="-12" x="14"></rect>
                        <rect class="bar" transform="translate(8,0)" y="-12" x="14"></rect>
                        <rect class="bar" transform="translate(16,0)" y="-12" x="14"></rect>
                        <rect class="bar" transform="translate(24,0)" y="-12" x="14"></rect>
                        <rect class="bar" transform="translate(32,0)" y="-12" x="14"></rect>
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
            posts.map((res, index) => {
              return (
                <List ket={index} bg={res}>
                  <div className="cover-album"></div>
                  <div className="info">
                    <span className="name-music">Name of music</span>
                    <span className="name-album">Name of album</span>
                  </div>
                  <div className="data">
                    4 de nov. de 2020
                  </div>
                  <div className="status">
                    <FaRegHeart />
                  </div>
                  <div className="time">4:32</div>
                  <div className="animtaion">
                    {index === 0 && (
                      <svg class="equilizer equilizer-animation" viewBox="0 0 60 60">
                        <g>
                          <title>Audio Equilizer</title>
                          <rect class="bar" transform="translate(0,0)" y="0"></rect>
                          <rect class="bar" transform="translate(8,0)" y="0"></rect>
                          <rect class="bar" transform="translate(16,0)" y="0"></rect>
                          <rect class="bar" transform="translate(24,0)" y="0"></rect>
                          <rect class="bar" transform="translate(32,0)" y="0"></rect>
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