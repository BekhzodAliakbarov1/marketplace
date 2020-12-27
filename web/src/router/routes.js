/* eslint-disable quotes */
/* start|AzimjonToirov|10/20/2020 */

import HomePage from "@/pages/HomePage.vue";
import CartPage from "@/pages/CartPage";
import About from "@/pages/AboutPage.vue";
import WishlistPage from "@/pages/WishlistPage";
import ProductPage from "@/pages/ProductPage";
import IndexPage from "@/pages/IndexPage";
import CheckOutPage from "@/pages/CheckOutPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage.vue";
<<<<<<< HEAD
import AllComponents from "@/pages/AllComponents";
=======
import BrandPage from '../pages/BrandPage';
import CategoryPage from '../pages/CategoryPage.vue';
import HelpPage from '../pages/HelpPage';
import MagazinePage from '../pages/MagazinePage.vue';
import DeliveryPage from '../pages/DeliveryPage.vue';
>>>>>>> 47a05b70d5b6b62d9e0f14c550dd9901ae56a936

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/index",
    name: "index",
    component: IndexPage,
  },
  {
    path: "/category",
    name: "category",
    component: CategoryPage,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: DeliveryPage,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOutPage,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/help",
    name: "help",
    component: HelpPage,
  },
  {
    path: "/magazine",
    name: "magazine",
    component: MagazinePage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: CartPage,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishlistPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  // start|AxrorbekNisonboyev|2020-10-21
  {
    path: "/product" /* '/product/:id', */,
    name: "product",
    component: ProductPage,
    props: (route) => ({ productId: route.params.id }),
  },
  {
    path: '/brands/:id', /* '/product/:id', */
    name: 'brands',
    component: BrandPage,
    props: (route) => ({ brandId: route.params.id }),
  },
  // end|AxrorbekNisonboyev|2020-10-21
];

export default routes;

/* end|AzimjonToirov|10/20/2020 14lines */
