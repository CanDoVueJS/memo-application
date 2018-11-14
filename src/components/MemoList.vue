<template>
  <div class="memo-list-component">
    <ul>
      <memo v-for="(memo, index) in this.memos"
            :memo="memo"
            :key="index"/>
    </ul>
  </div>
</template>
<script>
  import Memo from './Memo';
  export default {
    name: 'MemoListComponent',
    props: {
      memos: {
        type: Array
      }
    },
    components: {
      Memo
    }
  }
</script>
<style>

</style>
