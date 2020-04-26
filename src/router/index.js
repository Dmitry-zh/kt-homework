import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '@/views/Activity'
import Direct from '@/views/Direct'
import Home from '@/views/Home'
import Interesting from '@/views/Interesting'
import Profile from '@/views/Profile'
import Upload from '@/views/Upload'
import EdtProfile from '@/views/EdtProfile'
import Reg from '@/views/Reg'
import Meta from 'vue-meta'

Vue.use(Meta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/direct',
    name: 'Direct',
    component: Direct
  },
  {
    path: '/interesting',
    name: 'Interesting',
    component: Interesting
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/edit',
    name: 'Edit',
    component: EdtProfile
  },
  {
    path: '/registration',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/user/:login',
    name: 'UserPage',
    component: () => import('../views/UserPage.vue'),
    props: true
  },
  {
    path: '*',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router