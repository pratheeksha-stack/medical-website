import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ContactPage from '../views/ContactPage.vue';
import BlogPage from '../views/BlogPage.vue';
import HealthPage from '../views/HealthPage.vue';
import OurdocterPage from '../views/OurdocterPage.vue';
import OurPage from '../views/OurPage.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/contact', name: 'ContactPage', component: ContactPage },
    { path: '/blog', name: 'BlogPage', component: BlogPage },
    { path: '/health', name: 'HealthPage', component: HealthPage },
    { path: '/ourdocter', name: 'OurdocterPage', component: OurdocterPage },
    { path: '/our', name: 'OurPage', component: OurPage },


];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;