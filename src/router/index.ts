import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/pages/landing/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/pages/landing/FeaturesPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/pages/landing/ContactPage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modules/pages/landing/PricingPage.vue'),
    },
  ],
});

export default router;
