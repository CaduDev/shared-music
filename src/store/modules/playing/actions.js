export function change_music(current_music) {
  return {
    type: '@music/CHAGEND_MUSIC',
    payload: { current_music },
  };
}

export function changeFeedBack(data) {
  return {
    type: '@music/CHAGEND_PLAYLIST',
    payload: { data },
  };
}

export function changeIndexCurrentMusic(data) {
  return {
    type: '@music/CHAGEND_INDEX_CURRENT_MUSIC',
    payload: { data },
  };
}
