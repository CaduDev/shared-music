export function changeFeedBack({ show, type, message }) {
  return {
    type: '@feedBack/CHANGE_FEEDBACK',
    payload: { show, type, message },
  };
}
