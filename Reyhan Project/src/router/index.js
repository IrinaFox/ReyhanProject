import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JiraBoardView from '@/views/JiraBoardView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/jira', name: 'jira', component: JiraBoardView },
  ],
})

export default router

