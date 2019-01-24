import {
  CREATE_MEMO,
  DELETE_MEMO,
  FETCH_MEMOS,
  UPDATE_MEMO
} from './mutation-types';

export default {
  [FETCH_MEMOS] (state, payload) {
    state.memos = payload;
  },
  [CREATE_MEMO] (state, payload) {
    state.memos.push(payload);
  },
  [DELETE_MEMO] (state, id) {
    const targetIndex = state.memos.findIndex(v => v.id === id);
    state.memos.splice(targetIndex, 1);
  },
  [UPDATE_MEMO] (state, payload) {
    const targetIndex = state.memos.findIndex(v => v.id === payload.id);
    state.memos.splice(targetIndex, 1, payload);
  }
};
