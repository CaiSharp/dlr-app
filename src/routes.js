import Navbar from './components/Navbar.vue'

export const routes = [
    {path: '', name: 'home', components: {'navbar': Navbar}}
    //{path: '/*', redirect: {name: 'home'}}
];