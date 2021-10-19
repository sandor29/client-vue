/**
 * Vuex 4
 */
import { createStore, createLogger } from "vuex";

import auth from "./auth";
import shop from "./shop";

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({

    // Modules
    modules: {
        auth,
        shop
    },
    strict: debug,

    plugins: debug ? [createLogger()] : []
})

export default store