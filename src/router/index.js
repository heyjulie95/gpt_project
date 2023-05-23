import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Coach from '../views/Coach.vue';
import Registration from '../views/Registration.vue';
import Booking from '../views/Booking.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/coach/:id',
    name: 'coach',
    component: Coach,
    props: true,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
