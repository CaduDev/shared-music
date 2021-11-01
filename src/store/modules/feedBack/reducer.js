import produce from 'immer';

const INITIAL_STATE = {
  show: false,
  type: 'success',
  message: '',
};

export default function feedback(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@feedBack/CHANGE_FEEDBACK': {
        draft.show = action.payload.show;        
        draft.type = action.payload.type;        
        draft.message = action.payload.message || '';        
        break;
      }
      default:
    }
  });
}
