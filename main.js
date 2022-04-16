const header = './components/global/header.vue';
const footer = './components/global/footer.vue';

const siteTop = './components/siteTop.vue';

const page1 = './components/page1.vue';
const page2 = './components/page2.vue';
const page3 = './components/page3.vue';
const page4 = './components/page4.vue';

//router-view
const router = new VueRouter({
  routes: [
    {
      path: '/',
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
    {
      path: '/page3',
      component: httpVueLoader(page3)
    },
    {
      path: '/page4',
      component: httpVueLoader(page4)
    }
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