import {
  TOGGLE_THEATRE_MODE,
  TOGGLE_CONTRIB_GUARD_VISIBILITY,
  TOGGLE_LIKES_ANIM_VISIBILITY,
  LIKES_CLICKER,
  CHEST_CLICKER,
} from '../constants/general';

const initialState = {
  theatreMode: false,
  hideContribGuard: false,
  hideLikesAnim: false,
  likesClicker: {
    active: false,
    id: null,
  },
  chestClicker: {
    active: false,
    id: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEATRE_MODE:
      return {
        ...state,
        theatreMode: action.payload,
      };
    case TOGGLE_CONTRIB_GUARD_VISIBILITY:
      return {
        ...state,
        hideContribGuard: action.payload,
      };
    case TOGGLE_LIKES_ANIM_VISIBILITY:
      return {
        ...state,
        hideLikesAnim: action.payload,
      };
    case LIKES_CLICKER:
      return {
        ...state,
        likesClicker: { ...action.payload },
      };
    case CHEST_CLICKER:
      return {
        ...state,
        chestClicker: { ...action.payload },
      };
    default:
      return state;
  }
};
