<template>
  <h1>ここは{{ title }}</h1>
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: 'siteTop.vue'
    }
  }
}
</script>

<style scoped>
h1 {
    color: green;
}
</style>