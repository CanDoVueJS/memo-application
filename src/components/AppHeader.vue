<template>
  <div class="header-component">
    <h1>Memo application</h1>
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
  name: 'HeaderComponent',
  props: {
    memos: {
      type: Array
    }
  },
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
      const { title, content } = this;
      const isEmpty = title.length <= 0 || content.length <= 0;
      if (isEmpty) {
        return false;
      }
      this.storeMemo();
      this.resetFields();
    },
    storeMemo () {
      const { title, content } = this;
      const memosToObject = localStorage.memos ? JSON.parse(localStorage.memos) : [];
      memosToObject.push({ title, content });
      localStorage.setItem('memos', JSON.stringify(memosToObject));
    }
  }
}
</script>

<style scoped>
  .header-component {
  }
  .header-component h1 {
    marging-bottom: 20px;
    text-align: center;
  }
  .header-component form {
    border: 1px solid #ececec;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
    background-color: #fff;
  }
  .header-component form fieldset button[type="submit"],
  .header-component form fieldset button[type="reset"] {
    float: right;
    padding: 10px;
    border: 0;
    font-size: 16px;
    background: none;
  }
  .header-component form fieldset input {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 14px;
  }
  .header-component input:focus {
    outline: none;
  }
</style>

