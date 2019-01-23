<template>
  <div class="memo-app">
    <memo-form @addMemo="addMemo"/>
    <ul class="memo-list">
      <memo v-for="memo in memos"
            :key="memo.id"
            :memo="memo"
            @deleteMemo="deleteMemo"
            @editMemo="editMemo"/>
    </ul>
  </div>
</template>
<script>
import MemoForm from './MemoForm';
import Memo from './Memo';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MemoApp',
  computed: {
    ...mapState([
      'memos'
    ])
  },
  created () {
    this.fetchMemos();
  },
  methods: {
    ...mapActions([
      'fetchMemos',
      'addMemo',
      'deleteMemo',
      'editMemo'
    ])
  },
  components: {
    MemoForm,
    Memo
  }
};
</script>
<style scoped>
  .memo-list {
    padding: 20px 0;
    margin: 0;
  }
</style>
