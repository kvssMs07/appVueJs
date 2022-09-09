import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Article from '@/views/Article.vue';

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home,
    },
    {
        name: 'Article',
        path: '/article/:id',
        component: Article,
        props: true,
    },
];

// eslint-disable-next-line
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;