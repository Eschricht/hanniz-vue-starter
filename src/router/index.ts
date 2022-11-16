import { createRouter, createWebHistory } from 'vue-router';
import { baseRoute } from '@/views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    baseRoute,
  ],
});

export default router;
