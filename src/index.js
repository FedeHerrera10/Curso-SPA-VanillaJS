import router from './routes';

window.addEventListener('load',router); // cuando carga por 1ra vez
window.addEventListener('hashchange',router); // cuando cambia de pagina