import produce from 'immer';

import { nancyMulligan, edSheeran, nextToMeAudio, imagineDragon } from '../../../assets/';

const INITIAL_STATE = {
  currentMusic:     {
    music: nancyMulligan,
    album_cover: edSheeran,
    title_music: 'Nancy Mulligan',
    title_album: 'Divide',
    like: false
  },
  playlist:[
    {
      music: nancyMulligan,
      album_cover: edSheeran,
      title_music: 'Nancy Mulligan',
      title_album: 'Divide',
      like: false
    },
    {
      music: nextToMeAudio,
      album_cover: imagineDragon,
      title_music: 'Next to Me',
      title_album: 'Evolve',
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
      default:
    }
  });
}
