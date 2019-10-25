import {
  TOGGLE_THEATRE_MODE,
  TOGGLE_CONTRIB_GUARD_VISIBILITY,
  TOGGLE_LIKES_ANIM_VISIBILITY,
  LIKES_CLICKER,
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
  type: TOGGLE_LIKES_ANIM_VISIBILITY,
  payload: value,
});

export const toggleLikeClicker = (active, id) => ({
  type: LIKES_CLICKER,
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
