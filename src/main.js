import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import Index from "@/components/Index.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Index,
            children: [
                { path: '', component: Index },
                { path: '/:pathMatch(.*)*', redirect: '/' },
            ]
        },
    ],
})

createApp(App).use(router).mount('#app')
