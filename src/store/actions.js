import axios from 'axios';
import {
  CREATE_MEMO,
  DELETE_MEMO,
  FETCH_MEMOS,
  UPDATE_MEMO
} from './mutation-types';

const memoAPICore = axios.create({
  baseURL: 'http://localhost:2403/memos'
});

export function fetchMemos ({ commit }) {
  memoAPICore.get('/')
    .then(res => {
      commit(FETCH_MEMOS, res.data);
    });
}

export function addMemo ({ commit }, payload) {
  memoAPICore.post('/', payload)
    .then(res => {
      commit(CREATE_MEMO, res.data);
    });
}

export function deleteMemo ({ commit }, id) {
  memoAPICore.delete(`/${id}`)
    .then(() => {
      commit(DELETE_MEMO, id);
    });
}

export function editMemo ({ commit }, payload) {
  const { id, content } = payload;
  memoAPICore.put(`/${id}`, { content })
    .then(res => {
      commit(UPDATE_MEMO, res.data);
    });
}

export default {
  fetchMemos,
  addMemo,
  deleteMemo,
  editMemo
};
