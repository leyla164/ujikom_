import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue";
import Ulasan from "../views/Ulasan.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";
import Brands from "../views/Brands.vue";
import Categories from "../views/Categories.vue";
import Register from "../views/Register.vue";
import Profil from "../views/Profil.vue";
import PageOrder from "../views/PageOrder.vue"
import store from "../store";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/ulasan",
        name: "Ulasan",
        component: Ulasan,
    },
    {
        path: "/admin",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/brands",
        name: "Brands",
        component: Brands,
    },
    {
        path: "/produk1",
        name: "Categories",
        component: Categories,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/profil",
        name: "Profil",
        component: Profil,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true ,}
    },
    {
        path:"/order",
        name: "PageOrder",
        component: PageOrder,
        props: true,
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); // redirect to home
    } else {
        next();
    }
});

export default router;