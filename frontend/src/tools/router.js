import Vue from 'vue';
import VueRouter from 'vue-router';
const Login = () => import('../components/Login.vue');
const SignUp = () => import( '../components/SignUp.vue');


Vue.use(VueRouter);
const router = new VueRouter({

  routes: [
    { name: 'Login', path: '/login', component: Login },
    { name: 'Sign Up', path: '/sign-up', component: SignUp },
  ],
});

export default router;