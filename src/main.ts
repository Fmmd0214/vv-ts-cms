import { createApp } from "vue";
import App from "./App.vue"; // 相当于any类型，不知道App是个组件,只是可以导入

import "./assets/main.css";

createApp(App).mount("#app");
