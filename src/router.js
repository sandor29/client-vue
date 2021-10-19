/**
 * Vue Router 4
 */
import { createRouter, createWebHistory } from "vue-router";

/**
 * Router Path
 */
const routes = [
    {
        path: '/',
        redirect: '/portada'
    },
    {
        name: 'Portada',
        path: '/portada',
        component: () => import('./views/Portada.vue'),
    },
    {
        name: 'Autenticarse',
        path: '/autenticarse',
        component: () => import('./components/auth/Autenticarse.vue'),
    },
    {
        name: 'Registrarse',
        path: '/registrarse',
        component: () => import('./components/auth/Registrarse.vue'),
    },
    {
        name: 'Tienda',
        path: '/tienda',
        component: () => import('./components/shop/ProductList.vue'),
    },
    {
        name: 'Carrito',
        path: '/carrito',
        component: () => import('./components/shop/CartList.vue'),
    },
    {
        name: 'Action',
        path: '/action',
        component: () => import('./components/vue/Action.vue'),
    },
    {
        name: 'Ajustes',
        path: '/ajustes',
        component: () => import('./views/Ajustes.vue'),
    },
    {
        name: 'Ayuda',
        path: '/ayuda',
        component: () => import('./views/Ayuda.vue'),
    }
];

/**
 * Create Router
 */
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router