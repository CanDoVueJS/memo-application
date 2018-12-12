<template>
  <li class="memo-list">
    <strong>{{ memo.title }}</strong>
    <p @dblclick="handleDblClick">
      <template v-if="!isEditing">{{ memo.content }}</template>
      <input type="text"
             v-else
             ref="content"
             :value="memo.content"
             @blur="handleBlur"
             @keydown.enter="editMemo"/>
    </p>
    <div>
      <button type="button" @click="deleteMemo">X버튼</button>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'Memo',
    props: {
      editingId: {
        type: Number,
      },
      memo: {
        type: Object
      }
    },
    computed: {
      isEditing () {
        return this.memo.id === this.editingId;
      }
    },
    methods: {
      handleBlur () {
        this.$emit('endEditing');
      },
      handleDblClick () {
        const { id } = this.memo;
        this.$emit('startEditing', id);
        this.$nextTick(() => {
          this.$refs.content.focus();
        });
      },
      editMemo (e) {
        const id = this.memo.id;
        const content = e.target.value.trim();
        if (content.length <= 0) {
          return false;
        }
        this.$emit('editMemo', { id, content });
      },
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
  .memo-list p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
  }
</style>
