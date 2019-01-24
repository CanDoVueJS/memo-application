<template>
  <div class="app-header">
    <h1>Memo application</h1>
    <p>총 <strong>{{ getMemoCount }}</strong> 개의 메모가 생성되었습니다.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters([
      'getMemoCount'
    ])
  }
};
</script>

<style scoped>
  .app-header {
  }
  .app-header h1 {
    marging-bottom: 20px;
    text-align: center;
  }
  .app-header p {
    text-align: right;
  }
</style>
