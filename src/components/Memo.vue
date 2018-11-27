<template>
  <li class="memo-list">
    <strong>
      <template v-if="!isEditing">{{ memo.title }}</template>
      <input v-else type="text"/>
    </strong>
    <p>
      <template v-if="!isEditing">{{ memo.content }}</template>
      <input v-else type="text"/>
    </p>
    <div>
      <button type="button" @click="deleteMemo">X버튼</button>
    </div>
    <button type="button" @click="isEditing = !isEditing">버튼</button>
  </li>
</template>
<script>
  export default {
    name: 'Memo',
    props: {
      memo: {
        type: Object
      }
    },
    data () {
      return {
        isEditing: false,
      }
    },
    methods: {
      deleteMemo () {
        const id = this.memo.id;
        this.$emit('deleteMemo', id);
      }
    }
  }
</script>
<style scoped>
  .memo-list {
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;
    padding: 50px 20px 20px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
    background-color: #fff;
    list-style: none;
  }
  .memo-list input[type="text"] {
    border: 1px solid #ececec;
    font-size: inherit;
  }
  .memo-list div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: #cdcdcd;
  }
  .memo-list div button {
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
  .memo-list strong {
    display: block;
    margin-bottom: 15px;
  }
  .memo-list p {
    margin: 0;
  }
</style>
