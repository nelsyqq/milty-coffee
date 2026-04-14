import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../pages/HomePage.vue"
import MenuPage from "../pages/MenuPage.vue"
import AboutPage from "../pages/AboutPage.vue"
import ReviewsPage from "../pages/ReviewsPage.vue"
import ContactPage from "../pages/ContactPage.vue"

const routes = [
  { 
    path: "/", 
    name: "home",
    component: HomePage 
  },
  { 
    path: "/menu", 
    name: "menu",
    component: MenuPage 
  },
  { 
    path: "/about", 
    name: "about",
    component: AboutPage 
  },
  { 
    path: "/reviews", 
    name: "reviews",
    component: ReviewsPage 
  },
  { 
    path: "/contact", 
    name: "contact",
    component: ContactPage 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router