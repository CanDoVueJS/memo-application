<template>
  <li>
    {{memo}}
  </li>
</template>
<script>
  export default {
    name: 'Memo',
    props: {
      memo: {
        type: Object
      }
    }
  }
</script>
<style>

</style>
