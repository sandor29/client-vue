/**
 * Vuex Module Shop
 */
const shop = {
    namespaced: true,

    // State
    state: {
        products: [],
        cart: {}
    },

    // Mutations
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addItemCart(state, product) {
            product.cantidad = state.cart.hasOwnProperty(product.id) ? state.cart[product.id].cantidad + 1 : 1;
            state.cart[product.id] = product;
        },
        delItemCart(state, product) {
            state.cart[product.id].cantidad === 1 ? delete state.cart[product.id] : state.cart[product.id].cantidad -= 1;
        },
        clearProduct(state, product) {
            delete state.cart[product.id]
        },
        clearCart(state) {
            state.cart = {};
        }
    },

    // Actions
    actions: {
        async showProducts({ commit }) {
            try {
                const res = await fetch("data/productos.json")
                const dts = await res.json();
                commit('setProducts', dts);
            } catch (error) {
                console.log('shopData Products: ', error);
            }
        }
    },
    
    // Getters
    getters: {
        cartProduct(state) {
            return Object.values(state.cart).reduce((cant, { cantidad }) => cant + cantidad, 0);
        },
        cartImporte(state) {
            return Object.values(state.cart).reduce((cant, { cantidad, precio }) => cant + cantidad * precio, 0);
        }
    },
}

export default shop