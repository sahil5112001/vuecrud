import { createRouter, createWebHistory } from "vue-router";
import List from "../components/student/List.vue";
import Add from "../components/student/Add.vue";
import View from "../components/student/View.vue";
import Edit from "../components/student/Edit.vue";
import NotFound from "../view/NotFound.vue"

const routes = [
    {
        path: '/',
        name: 'list',
        component: List
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    },
    {
        path: '/view/:id',
        name: 'view',
        component: View
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit
    },
    {
        path: '/:pathhMatch(.*)*',
        name: 'notfound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router