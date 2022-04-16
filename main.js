const header = './components/global/header.vue';
const footer = './components/global/footer.vue';

const siteTop = './components/siteTop.vue';

const page1 = './components/page1.vue';
const page2 = './components/page2.vue';

//router-view
const router = new VueRouter({
  routes: [
    {
      path: '/siteTop',
      component: httpVueLoader(siteTop)
    },
    {
      path: '/page1',
      component: httpVueLoader(page1)
    },
    {
      path: '/page2',
      component: httpVueLoader(page2)
    },
  ]
});

const app = new Vue({
  el: "#app",
  router,
  components: {
    'header-view': httpVueLoader(header),
    'footer-view': httpVueLoader(footer)
  }
});