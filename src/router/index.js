import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Article from '@/views/Home.vue';

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home,
    },
    {
        name: 'Article',
        path: '/article',
        component: Article,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})