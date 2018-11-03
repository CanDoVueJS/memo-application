<template>
  <div>
    <input type="text"
           ref="inputField"
           v-model="text"
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

<style>

</style>

