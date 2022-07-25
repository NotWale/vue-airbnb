import { createApp } from 'vue'
import { dragscrollNext } from "vue-dragscroll";
import App from './App.vue'
import './assets/tailwind.css'

const app = createApp(App);
  
app.directive('dragscroll', dragscrollNext);
app.mount('#app')
