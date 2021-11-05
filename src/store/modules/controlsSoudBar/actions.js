export function changed_controls(music_played) {
  return {
    type: '@music/PLAYED_OR_PAUSED_MUSIC',
    payload: { music_played },
  };
}
