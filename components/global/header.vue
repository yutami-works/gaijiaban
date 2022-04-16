<template>
  <header class="bg-success">
    <div>
      <p>げぇじばん</p>
    </div>
    <button type="button" class="col-3 p-0 btn btn-success btn-lg" @click="jumpSiteTop">
      <i class="fa-solid fa-crow fa-2x"></i>
    </button>
  </header>
</template>

<script>
module.exports = {
  methods: {
    //トップ画面遷移メソッド
    jumpSiteTop() {
      this.$router.push('/siteTop')
    }
  }
}
</script>