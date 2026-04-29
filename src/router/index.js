import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/RyfrinPortfolio/',         component: HomeView },
    { path: '/RyfrinPortfolio/projects', component: ProjectsView },
    { path: '/RyfrinPortfolio/about',    component: AboutView },
    { path: '/RyfrinPortfolio/contact',  component: ContactView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
