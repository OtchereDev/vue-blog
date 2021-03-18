import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Tags from '../views/Tags.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/blog/:id',
    name:'Detail',
    component: Detail,
    props:true
  },
  {
    path:'/new',
    name:'Create',
    component:Create
  },
  {
    path:'/tags/:tag',
    name:'Tag',
    component:Tags
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
