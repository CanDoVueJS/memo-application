<template>
  <ul class="memo-list">
    <li v-for="(memo, index) in memos" :key="index">
      <strong>{{ memo.title }}</strong>
      <p>{{ memo.content }}</p>
      <div>
        <button type="button">닫기</button>
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'MemoList',
    props: {
      memos: {
        type: Array
      }
    }
  }
</script>
<style scoped>
  .memo-list {
    padding: 20px 0;
    margin: 0;
  }
  .memo-list li {
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;
    padding: 50px 20px 20px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
    background-color: #fff;
    list-style: none;
  }
  .memo-list li div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: #cdcdcd;
  }
  .memo-list li div button {
    position: absolute;
    right: 7px;
    top: 7px;
    padding: 0;
    width: 15px;
    height: 15px;
    text-indent: -10000px;
    border-radius: 25px;
    background-color: #ff9e9d;
    border: 0;
  }
  .memo-list li strong {
    display: block;
    margin-bottom: 15px;
  }
  .memo-list li p {
    margin: 0;
  }
</style>
