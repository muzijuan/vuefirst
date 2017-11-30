import Vue from "vue";
import App from "./App.vue"

import router from "./routers/router.js"
//引入mint-ui插件
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
//引入mui的样式文件
import "./lib/mui/css/mui.css"
//引入扩展图标的样式
import "./lib/mui/css/icons-extra.css"
Vue.use(MintUI);
var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {App}
})