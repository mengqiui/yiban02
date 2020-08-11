import Vue from 'vue'
import Router from 'vue-router'
 
// const index = ()=>import("@/views/index/index")
const index = resolve => require(["@/views/index/index"], resolve)

const product = resolve => require(["@/views/product/product"], resolve)
const digital = resolve => require(["@/views/product/digital"], resolve)
const blockChain = resolve => require(["@/views/product/blockChain"], resolve)
const fintech = resolve => require(["@/views/product/fintech"], resolve)
const hash = resolve => require(["@/views/product/hash"], resolve)
const supercompute = resolve => require(["@/views/product/supercompute"], resolve)

const news = resolve => require(["@/views/news/list"], resolve)
const new01 = resolve => require(["@/views/news/new01"], resolve)
const new02 = resolve => require(["@/views/news/new02"], resolve)
const new03 = resolve => require(["@/views/news/new03"], resolve)
const new04 = resolve => require(["@/views/news/new04"], resolve)
const new05 = resolve => require(["@/views/news/new05"], resolve)
const new06 = resolve => require(["@/views/news/new06"], resolve)
const new07 = resolve => require(["@/views/news/new07"], resolve)
const new08 = resolve => require(["@/views/news/new08"], resolve)


// const service = resolve => require(["@/views/service/service"], resolve)
const about = resolve => require(["@/views/about/about"], resolve)

const talents = resolve => require(["@/views/talents/talents"], resolve)
const development = resolve => require(["@/views/talents/development"], resolve)
const working = resolve => require(["@/views/talents/working"], resolve)
const employee = resolve => require(["@/views/talents/employee"], resolve)
const Recruitment = resolve => require(["@/views/talents/Recruitment"], resolve)

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/index', name: 'index', component: index },
    { path: '/product', name: 'product', component: product,
      children:[
        { path: '/product/digital', name: 'digital', component: digital },
        { path:'/product/super', name: 'super', component: supercompute,},
        { path:'/product/hash', name: 'hash', component: hash,},
        { path:'/product/fintech', name: 'fintech', component: fintech,},
        { path:'/product/blockChain', name: 'blockChain', component: blockChain,},
      ]
    },
    { path: '/talents', name: 'talents', component: talents,
      children:[
        { path: '/talents/development', name: 'development', component: development },
        { path:'/talents/working', name: 'working', component: working,},
        { path:'/talents/employee', name: 'employee', component: employee,},
        { path:'/talents/Recruitment', name: 'Recruitment', component: Recruitment,}
      ]
    },
    { path: '/news', name: 'news', component: news },
    { path: '/new01', name: 'new01', component: new01 },
    { path: '/new02', name: 'new02', component: new02 },
    { path: '/new03', name: 'new03', component: new03 },
    { path: '/new04', name: 'new04', component: new04 },
    { path: '/new05', name: 'new05', component: new05 },
    { path: '/new06', name: 'new06', component: new06 },
    { path: '/new07', name: 'new07', component: new07 },
    { path: '/new08', name: 'new08', component: new08 },
    // { path: '/service', name: 'service', component: service },
    { path: '/about', name: 'about', component: about },
    { path: '*', redirect:'/about' }
  ],
})
