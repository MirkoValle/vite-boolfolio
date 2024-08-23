import { createRouter, createWebHistory } from 'vue-router';

import AppProjects from './pages/AppProjects.vue';
import AppHome from './pages/AppHome.vue';
import AppSingleProject from './pages/AppSingleProject.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },  {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects/id',
            name: 'SingleProject',
            component: AppSingleProject
        },
    ]
});

export { router };