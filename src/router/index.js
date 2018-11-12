import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'bootstrap-vue/es/components';
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import title1 from '../components/title1';
import Data from '../components/Data';
import VeeValidate from 'vee-validate';
import register from '../components/register';
import password from '../components/password';
import VueVideoBackground from 'vue-video-background';
import Hello from '../components/Hello';



Vue.use(VueVideoBackground);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(Pagination);
Vue.component('b-pagination', bPagination);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Data',
      component: Data,
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/HelloWorld/:HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/book/:title1',
      name: 'title1',
      component: title1,
      props: true,
    },
    {
      path: '/:name2/:pass2',
      name: 'register1',
      component: Data,
      props: true,
    },
    {
      path: '/:field',
      name: 'password',
      component: password,
      props: true,
    },
  ],
});
