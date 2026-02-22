import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/QuizPage.vue'),
  },
  {
    path: '/lookup',
    name: 'Lookup',
    component: () => import('../views/LookupPage.vue'),
  },
  {
    path: '/result/:code',
    name: 'Result',
    component: () => import('../views/ResultPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
