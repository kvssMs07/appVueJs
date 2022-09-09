import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

import Liste from './components/Liste.vue';
app.component('ListeArticles', Liste);

//import du router 
import router from '@/router';
app.use(router);

app.mount('#app');