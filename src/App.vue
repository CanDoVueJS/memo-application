<template>
  <div id="app">
    <app-header/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  data () {
  },
  components: {
    AppHeader
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
