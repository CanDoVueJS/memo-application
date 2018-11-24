<template>
  <div id="app">
    <app-header :memos="memos"
                @addMemo="addMemo"/>
    <memo-list :memos="memos"></memo-list>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import MemoList from './components/MemoList';

export default {
  name: 'app',
  data () {
    return {
      memos: [],
    }
  },
  created () {
    this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
  },
  methods: {
    addMemo (payload) {
      this.memos.push(payload);
      this.storeMemo();
    },
    storeMemo () {
      const memosToString = JSON.stringify(this.memos);
      localStorage.setItem('memos', memosToString);
    }
  },
  components: {
    AppHeader,
    MemoList
  }
}
</script>

<style>
  body {
    background-color: #f5f5f5;
  }
  html, body, div, input, fieldset, form {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  #app {
    width: 600px;
    margin: 0 auto;
  }
</style>
