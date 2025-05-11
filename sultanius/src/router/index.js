import { createWebHistory, createRouter } from 'vue-router'

import App from '../App.vue'
import MainPage from '../components/mainPage/MainPage.vue'
import ProjectComp from '../components/projects/ProjectComp.vue'
import ProjectInfo from '../components/projects/ProjectInfo.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/projects', component: ProjectComp },
  { path: '/projects/:name', component: ProjectInfo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
