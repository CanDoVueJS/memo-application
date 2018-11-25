<template>
  <div id="app">
    <app-header/>
    <memo-app/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import MemoApp from './components/MemoApp';

export default {
  name: 'app',
  components: {
    AppHeader,
    MemoApp
  }
}
</script>

<style>
  body {
    background-color: #f5f5f5;
  }
  html, body, div, input, fieldset, form {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  #app {
    width: 600px;
    margin: 0 auto;
  }
</style>
