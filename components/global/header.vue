<template>
  <header class="bg-success py-2">
    <div>
      <button type="button" class="p-0 btn btn-success btn-lg" @click="jumpSiteTop">
        <h2><i class="fa-solid fa-crow fa-2x"></i>げぇじばん</h2>
      </button>
    </div>
  </header>
</template>

<script>
module.exports = {
  methods: {
    //トップ画面遷移メソッド
    jumpSiteTop() {
      this.$router.push('/')
    }
  }
}
</script>