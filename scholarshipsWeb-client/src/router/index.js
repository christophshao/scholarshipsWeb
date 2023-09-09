import Vue, {
    computed
  } from 'vue'
  import VueRouter from 'vue-router'
  
  Vue.use(VueRouter);
  
  // 配置导出路由
  export default new VueRouter({
    // 注意这里是routes
    routes: [
      
      {
        name: '首页',
        path: '/',
        component: resolve => require(['../views/Home.vue'], resolve)
      },
      {
        name: '奖学金信息',
        path: '/jiangxuejin',
        component: resolve => require(['../views/JiangXueJin.vue'], resolve)
      },
      {
        name: '助学金信息',
        path: '/zhuxuejin',
        component: resolve => require(['../views/ZhuXueJin.vue'], resolve)
      },
      {
        name: '困难生',
        path: '/poor-student',
        component: resolve => require(['../views/PoorStudent.vue'], resolve)
      },
      {
        name: '公告栏',
        path: '/bulletin',
        component: resolve => require(['../views/Bulletin.vue'], resolve)
      },
      {
        name: '公告栏详情页',
        path: '/newsDetail',
        component: resolve => require(['../views/NewsDetail.vue'], resolve)
      },

      // 404 not found
      {
        name: '404',
        path: '*',
        component: resolve => require(['../views/404'], resolve),
      },
      
  
  
    ]
  });
  