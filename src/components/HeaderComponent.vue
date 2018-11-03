<template>
  <div class="header-component">
    <h1>Memo application</h1>
    <input type="text"
           ref="inputField"
           v-model="text"
           placeholder="메모를 입력해주세요."
           @keydown.enter="addMemo"/>
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
      text: ''
    }
  },
  methods: {
    addMemo () {
      if (this.text.length <= 0) {
        return false;
      }
      this.$emit('addMemo', this.text);
      this.clearInputField();
    },
    clearInputField () {
      this.$refs.inputField.value = '';
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
  .header-component input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ececec;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
  }

</style>

