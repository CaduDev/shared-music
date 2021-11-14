import React, { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { BsPlayCircle, BsPauseCircle ,BsGridFill } from 'react-icons/bs';

import { FaThList, FaRegHeart } from 'react-icons/fa';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Container, Card, List } from './styles';

import { posts } from '../../assets/';

import  { change_music, changeFeedBack, changeIndexCurrentMusic } from '../../store/modules/playing/actions';

import  { setPlayed, setFirstPlay } from '../../store/modules/controlsSoudBar/actions';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Home() {
  const dispatch = useDispatch();
  const { playlist, currentMusic } = useSelector(state => state.playing);
  const [layout, setLayout] = useState('grid');
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

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      playlist,
      result.source.index,
      result.destination.index
    );

    let index = null;

    if(currentMusic && currentMusic.id) {
      for(let i=0; i < items.length;i++) {
        if(items[i].id === currentMusic.id) {
          index = i
        }
      }
    }

    dispatch(changeIndexCurrentMusic(index))

    dispatch(changeFeedBack(items))
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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {playlist.map((res, index) => (
                    <Draggable 
                      key={'item-'+res.id} 
                      draggableId={'item-'+res.id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Card 
                          className="card" 
                          bg={res.album_cover} 
                          key={index}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div>
                            <p>{res.title_music}</p>
                            <span>{res.title_album}</span>
                            <div className="cover_lasted_music">
                              <button onClick={() => playMusic(res, index)}>
                                {currentMusic && res.id === currentMusic.id? 
                                  played?(
                                    <BsPauseCircle size={'100%'} color="#888"/>
                                  ):(
                                    <BsPlayCircle size={'100%'} color="#888"/>
                                  )
                                :(
                                  <BsPlayCircle size={'100%'} color="#888"/>
                                )}
                              </button>
                              <button className="liked">
                                <FaRegHeart size={24} color="#877eb8" />
                              </button>
                            </div>
                            {currentMusic && res.id === currentMusic.id? (
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
                            ): null}
                          </div>
                        </Card> 
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ):(
        <div className={`itens-to-list`}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {playlist.map((res, index) => (
                    <Draggable 
                      
                      key={'item-'+res.id} 
                      draggableId={'item-'+res.id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <List 
                          className="list_track"
                          key={index} 
                          bg={res.album_cover} 
                          onDoubleClick={() => playMusic(res,index)}
                          ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}
    </Container>
  );
}

export default Home;