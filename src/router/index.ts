import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpruntView from "../views/EmpruntView.vue"
import AboutView from '../views/AboutView.vue'
import Autopartage from '../components/Autopartage.vue'
import Test from '../views/Test.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: "/emprunt",
      name: "emprunt",
      component: EmpruntView
    },{
        path: '/autopartage',
        name: 'autopartage',
        component: Autopartage
      },
      {
          path: '/laverie',
          name: 'laverie',
          component: Test
      }
  ]
})

export default router;
