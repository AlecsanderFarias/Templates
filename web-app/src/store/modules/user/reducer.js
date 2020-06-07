import produce from 'immer';

const INITIAL_STATE = {
  me: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.me = action.payload.me;
        break;
      }

      case '@user/UPDATE_ME_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/GET_ME_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/GET_ME_SUCCESS': {
        draft.me = action.payload.me;
        draft.loading = false;
        break;
      }

      case '@user/GET_ME_FAIL': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.me = null;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
