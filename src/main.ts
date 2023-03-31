import { createApp } from "vue";
import "normalize.css";
import "./assets/css/index.less";
import App from "./App.vue"; // 相当于any类型，不知道App是个组件,只是可以导入
import router from "./router";
import pinia from "./store";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
