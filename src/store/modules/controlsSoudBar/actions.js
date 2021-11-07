export function changeVolume(data) {
  return {
    type: '@controls/CHANGE_VOLUME',
    payload: { data },
  };
}

export function setMuteValue(data) {
  return {
    type: '@controls/CHANGE_MUTE',
    payload: { data },
  };
}

export function setAudioProgressWidth(data) {
  return {
    type: '@controls/CHANGE_PROGRESS',
    payload: { data },
  };
}

export function setCurrentTime(data) {
  return {
    type: '@controls/CHANGE_CURRENT_TIME',
    payload: { data },
  };
}

export function setPlayed(data) {
  return {
    type: '@controls/CHANGE_PLAYED',
    payload: { data },
  };
}

export function setFirstPlay(data) {
  return {
    type: '@controls/CHANGE_FIRST_PLAY',
    payload: { data },
  };
}

export function setChangeRepeat(data) {
  return {
    type: '@controls/CHANGE_REPEAT',
    payload: { data },
  };
}
