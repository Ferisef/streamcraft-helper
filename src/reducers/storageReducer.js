const initialState = {
  theatreMode: false,
  hideContribGuard: false,
  hideLikesAnim: false,
  autoLike: {
    checked: false,
    interval: null,
  },
  autoOpenChest: {
    checked: false,
    interval: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'THEATRE_MODE':
      return {
        ...state,
        theatreMode: action.payload,
      };
    case 'HIDE_CONTRIB_GUARD':
      return {
        ...state,
        hideContribGuard: action.payload,
      };
    case 'HIDE_LIKE_ANIM':
      return {
        ...state,
        hideLikesAnim: action.payload,
      };
    case 'AUTO_LIKE':
      return {
        ...state,
        autoLike: {
          checked: action.payload.checked,
          interval: action.payload.interval,
        },
      };
    case 'AUTO_OPEN_CHEST':
      return {
        ...state,
        autoLike: {
          checked: action.payload.checked,
          interval: action.payload.interval,
        },
      };
    default:
      return state;
  }
}
