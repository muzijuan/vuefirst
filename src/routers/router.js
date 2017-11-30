import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)
//引入组件
import HomeContainer from "../components/tabcontainers/HomeContainer.vue"
import MemberContainer from "../components/tabcontainers/MemberContainer.vue"
import CartContainer from "../components/tabcontainers/CartContainer.vue"
import SearchContainer from "../components/tabcontainers/SearchContainer.vue"

//新闻组件
import NewsList from "../components/news/NewsList.vue"
import NewsInfo from "../components/news/NewsInfo.vue"
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: HomeContainer
        },
        {
            path:"/",
            redirect:"/home"

        },
        {
            path: "/member",
            component: MemberContainer
        },
        {
            path: "/cart",
            component: CartContainer
        },
        {
            path: "/search",
            component: SearchContainer
        },
        {
            path: "/home/newslist",
            component: NewsList
        },
        {
            path: "/home/newsinfo/:id",
            component: NewsInfo
        }
    ]
});

