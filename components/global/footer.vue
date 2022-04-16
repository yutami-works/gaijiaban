<template>
  <footer class="p-1 bg-success text-white fixed-bottom">
    <div class="container-fluid">
      <div class="row">
        <button type="button" class="col-3 p-0 btn btn-success btn-lg" @click="jumpA">
          <i class="fas fa-solid fa-comments fa-2x"></i>
          <p class="h6 text-nowrap">Time Line</p>
        </button>
        <button type="button" class="col-3 p-0 btn btn-success btn-lg" @click="jumpB">
          <i class="fas fa-solid fa-address-card fa-2x"></i>
          <p class="h6 text-center text-nowrap">マイページ</p>
        </button>
        <button type="button" class="col-3 p-0 btn btn-success btn-lg" @click="jumpC">
          <i class="fas fa-solid fa-pen-to-square fa-2x"></i>
          <p class="h6 text-nowrap">とうこう</p>
        </button>
        <button type="button" class="col-3 p-0 btn btn-success btn-lg" @click="jumpD">
          <i class="fas fa-solid fa-bell fa-2x"></i>
          <p class="h6 text-nowrap">通知</p>
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
module.exports = {
  methods: {
    //相談一覧画面遷移メソッド
    jumpA() {
      this.$router.push('page1')
    },
    //相談一覧画面遷移メソッド
    jumpB() {
      this.$router.push('page2')
    },
    //相談一覧画面遷移メソッド
    jumpC() {
      this.$router.push('page3')
    },
    //相談一覧画面遷移メソッド
    jumpD() {
      this.$router.push('page4')
    }
  }
}
</script>