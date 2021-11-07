import produce from 'immer';

import { 
  nancyMulligan, 
  edSheeran, 
  nextToMeAudio, 
  imagineDragon,
  edgarAllanPoets,
  edgarAllanPoetsAudio
} from '../../../assets/';

const INITIAL_STATE = {
  currentMusic: null,
  playlist:[
    {
      id: 1,
      music: nancyMulligan,
      album_cover: edSheeran,
      title_music: 'Nancy Mulligan',
      title_album: 'Divide',
      like: false
    },
    {
      id: 2,
      music: nextToMeAudio,
      album_cover: imagineDragon,
      title_music: 'Next to Me',
      title_album: 'Evolve',
      like: false
    },
    {
      id: 3,
      music: edgarAllanPoetsAudio,
      album_cover: edgarAllanPoets,
      title_music: 'Those Who Care',
      title_album: 'Those Who Care',
      like: false
    },
  ]
};

export default function last_played(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@music/CHAGEND_MUSIC': {
        draft.currentMusic = action.payload.current_music;              
        break;
      }
      case '@music/CHAGEND_PLAYLIST': {
        draft.playlist = action.payload.data;              
        break;
      }
      case '@music/CHAGEND_INDEX_CURRENT_MUSIC': {
        draft.currentMusic.index = action.payload.data;              
        break;
      }
      default:
    }
  });
}
