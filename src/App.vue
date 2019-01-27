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
};
</script>

<style>
  @import "https://use.fontawesome.com/releases/v5.6.3/css/all.css";
  body {
    background-color: #f5f5f5;
  }
  html, body, div, input, fieldset, form, h1, p, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  textarea {
    border: none;
    resize: none;
  }
  #app {
    width: 560px;
    margin: 0 auto;
  }
</style>
