/**
 * Vue 3 | Router 4 | Vuex 4
 */
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

/**
 * Taildwind Css
 */
import './index.css'

/**
 * Create App
 */
const app = createApp(App)
    .use(router)
    .use(store)

/**
 * Router IsReady
 */
router.isReady().then(() => {
    app.mount('#app');
});

/**
 * Responsive Desing
 *
 *  sm -  640 px - @media (min-width:  640 px) {...} | table
 *  md -  768 px - @media (min-width:  768 px) {...} |
 *  lg - 1024 px - @media (min-width: 1024 px) {...} | laptop
 *  xl - 1280 px - @media (min-width: 1280 px) {...} | desktop
 * 2xl - 1536 px - @media (min-width: 1536 px) {...} |
 *
 */
