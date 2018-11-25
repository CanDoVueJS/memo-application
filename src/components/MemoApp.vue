<template>
  <memo-form @addMemo="addMemo"/>
</template>
<script>
  import MemoForm from './MemoForm';
  export default {
    name: 'MemoApp',
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
      MemoForm
    }
  }
</script>
<style scoped>

</style>
