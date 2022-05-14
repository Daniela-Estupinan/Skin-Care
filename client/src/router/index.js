import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import HomeView from '../views/HomeView.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'
import Post from '../views/Post.vue'
import AddProduct from '../views/AddProduct.vue'
import HomeAdmin from '../views/HomeAdmin.vue'
import EditProduct from '../views/EditProduct.vue'
import Product from '../views/Product.vue'

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
    path:'/admin',
    name:'admin',
    component:Admin,
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
  {
    path:'/add-product',
    name:'add-product',
    component:AddProduct,
  },
  {
    path:'/homeAdmin',
    name:'homeAdmin',
    component:HomeAdmin,
  },
  {
    path:'/edit-product/:id',
    name:'edit-product',
    component:EditProduct,
  },
   {
    path: '/product/:id',
    name: 'product',
    component: Product,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
