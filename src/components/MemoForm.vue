<template>
  <div class="memo-form">
    <form @submit.prevent="addMemo"
          @reset.prevent="resetFields">
      <fieldset>
        <input type="text"
               v-model="title"
               placeholder="메모의 제목을 입력해주세요."/>
        <input type="text"
               v-model="content"
               placeholder="메모의 내용을 입력해주세요."/>
        <button type="submit">등록하기</button>
        <button type="reset">취소</button>
      </fieldset>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'MemoForm',
    data () {
      return {
        title: '',
        content: '',
      }
    },
    methods: {
      resetFields () {
        this.title = '';
        this.content = '';
      },
      addMemo () {
        const id = new Date().getTime();
        const { title, content } = this;
        const isEmpty = title.length <= 0 || content.length <= 0;
        if (isEmpty) {
          return false;
        }
        this.$emit('addMemo', { id, title, content });
        this.resetFields();
      },
    }
  }
</script>
<style scoped>
  .memo-form form {
    border: 1px solid #ececec;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
    background-color: #fff;
  }
  .memo-form form fieldset button[type="submit"],
  .memo-form form fieldset button[type="reset"] {
    float: right;
    padding: 10px;
    border: 0;
    font-size: 16px;
    background: none;
  }
  .memo-form form fieldset input {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 14px;
  }
  .memo-form input:focus {
    outline: none;
  }
</style>
