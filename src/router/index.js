import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '../views/EducationView.vue'
import SkillView from '../views/SkillView.vue'
import ToolsView from '../views/ToolsView.vue'
import DocumentationView from '../views/DocumentationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView  
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillView  
    },
    {
      path: '/tools',
      name: 'tools',
      component: ToolsView  
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: DocumentationView  
    }
  ]
})

export default router
