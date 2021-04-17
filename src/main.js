import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import FeatureItem from './components/FeatureItem.vue'



const app = createApp(App)
app.component('feature-item', FeatureItem)
app.use(router)
app.mount('#app')