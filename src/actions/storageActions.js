export const setTheatreMode = theatreMode => ({
  type: 'THEATRE_MODE',
  payload: theatreMode,
});

export const setHideContribGuard = hideContribGuard => ({
  type: 'HIDE_CONTRIB_GUARD',
  payload: hideContribGuard,
});

export const setHideLikesAnim = hideLikesAnim => ({
  type: 'HIDE_LIKE_ANIM',
  payload: hideLikesAnim,
});

export const setAutoLike = (checked, interval) => ({
  type: 'AUTO_LIKE',
  payload: {
    checked,
    interval,
  },
});

export const setAutoOpenChest = (checked, interval) => ({
  type: 'AUTO_OPEN_CHEST',
  payload: {
    checked,
    interval,
  },
});
