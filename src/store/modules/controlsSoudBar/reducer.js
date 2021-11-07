import produce from 'immer';

const INITIAL_STATE = {
  vol: '1',
  mute: false,
  audioProgressWidth: '0%',
  currentTime: {
    currentOriginal: 0,
    currentConverted: '00:00 00:00'
  },
  played: false,
  firstPlay: null,
  repeat: 'none'
};

export default function controlsSoudBar(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@controls/CHANGE_VOLUME': {
        draft.vol = action.payload.data;       
        break;
      }
      case '@controls/CHANGE_MUTE': {
        draft.mute = action.payload.data;
        break;
      }
      case '@controls/CHANGE_PROGRESS': {
        draft.audioProgressWidth = action.payload.data;
        break;
      }
      case '@controls/CHANGE_CURRENT_TIME': {
        draft.currentTime = action.payload.data;
        break;
      }
      case '@controls/CHANGE_PLAYED': {
        draft.played = action.payload.data;
        break;
      }
      case '@controls/CHANGE_FIRST_PLAY': {
        draft.firstPlay = action.payload.data;
        break;
      }
      case '@controls/CHANGE_REPEAT': {
        draft.repeat = action.payload.data;
        break;
      }
      default:
    }
  });
}
