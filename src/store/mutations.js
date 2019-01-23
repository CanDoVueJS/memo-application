
export function FETCH_MEMOS (state, payload) {
  state.memos = payload;
}

export function CREATE_MEMO (state, payload) {
  state.memos.push(payload);
}

export function DELETE_MEMO (state, id) {
  const targetIndex = state.memos.findIndex(v => v.id === id);
  state.memos.splice(targetIndex, 1);
}

export function UPDATE_MEMO (state, payload) {
  const targetIndex = state.memos.findIndex(v => v.id === payload.id);
  state.memos.splice(targetIndex, 1, payload);
}

export default {
  FETCH_MEMOS,
  CREATE_MEMO,
  DELETE_MEMO,
  UPDATE_MEMO
};
