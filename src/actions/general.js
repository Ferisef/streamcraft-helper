import {
  TOGGLE_THEATRE_MODE,
  TOGGLE_CONTRIB_GUARD_VISIBILITY,
  TOGGLE_LIKE_ANIM_VISIBILITY,
  LIKE_CLICKER,
  CHEST_CLICKER,
} from '../constants/general';

export const toggleTheatreMode = value => ({
  type: TOGGLE_THEATRE_MODE,
  payload: value,
});

export const toggleContribGuardVisibility = value => ({
  type: TOGGLE_CONTRIB_GUARD_VISIBILITY,
  payload: value,
});

export const toggleLikesAnimVisibility = value => ({
  type: TOGGLE_LIKE_ANIM_VISIBILITY,
  payload: value,
});

export const toggleLikeClicker = (active, id) => ({
  type: LIKE_CLICKER,
  payload: {
    active, id,
  },
});

export const toggleChestClicker = (active, id) => ({
  type: CHEST_CLICKER,
  payload: {
    active, id,
  },
});
