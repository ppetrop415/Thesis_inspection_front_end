import Vue from 'vue'
import VueRouter from 'vue-router'
import BusinessList from "./components/BusinessList.vue";
import NewInspection from "./components/NewInspection.vue"
import BranchstoreList from "./components/BranchstoreList.vue"
import ActivityList from "./components/ActivityList.vue"
import Activity from "./components/Activity.vue"

//Next you need to call Vue.use(Router) to make sure that Router is added as a middleware to our Vue project.
Vue.use(VueRouter)

export default new VueRouter({
    //The default mode for Vue Router is hash mode. 
    //It uses a URL hash to simulate a full URL so that the page won’t be reloaded when the URL changes.  
    linkActiveClass: "active",
    mode:'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            
        },
        {
            path: '/inspections',
            name: 'inspections',
        },
        {
            path: '/new-inspection',
            name: 'new-inspection',
            component: NewInspection,
        },
        {
            path: '/businesses',
            name: 'businesses',
            component: BusinessList,
        },
        {
            path: '/businesses/:id',
            name: 'business-detail',
        },
        {
            path: '/business-add',
            name: 'business-add',
        },
        {
            path: '/branchstores',
            name: 'branchstores',
            component: BranchstoreList,
        },
        {
            path: '/activities',
            name: 'activities',
            component: ActivityList,
        },
        {
            path: '/activities/:slug',
            name: 'activity',
            component: Activity,
        },

    ]
})