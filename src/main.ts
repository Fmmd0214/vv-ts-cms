import { createApp } from "vue";
import "normalize.css";
import "./assets/css/index.less";
import App from "./App.vue"; // 相当于any类型，不知道App是个组件,只是可以导入
import router from "./router";
import pinia from "./store";

// 1. 全局注册;方便和简洁
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// app.use(ElementPlus);

// 2. 按需引入：用哪个引入哪个
import { ElButton } from "element-plus";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
