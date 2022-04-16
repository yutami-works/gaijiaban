<template>
  <header class="bg-success">
    <div>
      <button type="button" class="p-0 btn btn-success btn-lg" @click="jumpSiteTop">
        <i class="fa-solid fa-crow fa-2x"></i>げぇじばん
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