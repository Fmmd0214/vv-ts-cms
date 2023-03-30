// 这里声明了css、less、scss...文件
/// <reference types="vite/client" />

// 这里让.vue文件生效
declare module "*.vue" {
    /**
     * DefineComponent就是defineComponent的返回类型
     * 所以可以直接用DefineComponent来定义vue组件
     */
    import { DefineComponent } from 'vue'
    const component:DefineComponent // 这样引入.vue文件，就不是any类型了，而是一个真正的组件
    export default component
}