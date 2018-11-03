<template>
  <div id="app">
    <header-component :memos="memos"
                      @addMemo="addMemo"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';

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
    addMemo (memo) {
      this.memos.push(memo);
      this.storeMemo();
    },
    storeMemo () {
      const memosToString = JSON.stringify(this.memos);
      localStorage.setItem('memos', memosToString);
    }
  },
  components: {
    HeaderComponent
  }
}
</script>

<style>
</style>
