import produce from 'immer';

const INITIAL_STATE = {
  music_played: false,
  volume: '0.01'
};

export default function controlsSoudBar(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@music/PLAYED_OR_PAUSED_MUSIC': {
        draft.music_played = action.payload.music_played;              
        break;
      }
      case '@music/CHAGEND_MUSIC': {
        draft.music_played = false;              
        break;
      }
      case '@music/VOLUME_MUSIC': {
        draft.volume = action.payload.volume;              
        break;
      }
      default:
    }
  });
}
