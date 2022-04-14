import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import HomeView from '../views/HomeView.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter)

const routes = [

  {
    path:'/register',
    name: 'register',
    component:Register,
  },
  {
    path:'/',
    name: 'login',
    component:Login,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },

    {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
  },
      {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
        {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
