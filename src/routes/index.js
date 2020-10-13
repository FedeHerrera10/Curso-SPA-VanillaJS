import Header from '../templates/Header';
import Home from '../pages/home';
import Characters from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/': Home,
    '/:id': Characters,
    '/Contact': 'Contact',
}

// Creamos el router

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHash(); // obtenes el hash 
    let route = await resolveRoutes(hash); // obtenemos lo ruta
    
    let render = routes[route] ? routes[route] : Error404; // si encuentra la ruta la devulve sino error
    
    content.innerHTML = await render();
    console.log(content)
    
}

export default router;