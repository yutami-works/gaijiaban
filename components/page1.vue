<template>
  <div class="p-5">
    <h1 class="text-start">ここは</h1>
    <h1 class="text-center text-primary"> {{ title }} </h1>
    <h1 class="text-end">です</h1>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: 'Time Line'
    }
  }
}
</script>