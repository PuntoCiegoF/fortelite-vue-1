import { createApp } from 'vue'
import router from './plugins/vue-router'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SirvjsVue from '@sirv/sirvjs-vue';
import VueGtag from 'vue-gtag';
import { MAIN } from './constants/main';


//214583
createApp(App)
  .use(router)
  .use(VueGtag, {
      config: { id: MAIN.google_id },
      appName: 'Fortelite Web App',
      pageTrackerScreenviewEnabled: true,
  }, router)
  .use(SirvjsVue)
  .mount('#app')
