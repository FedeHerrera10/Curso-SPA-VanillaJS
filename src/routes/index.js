import Header from '../templates/Header';
import Home from '../pages/home';
import Characters from '../pages/Character';
import Filter from '../pages/Filter';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Footer from '../templates/Footer'


const routes = {
    '/': Home,
    '/:id': Characters,
    '/Contact': 'Contact',
    '/filter':Filter,
}

// Creamos el router

const router = async () => {
    
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');
    header.innerHTML =  Header();
    
    const filter = null || document.getElementById('Filter');
    filter.style.display="none";
    let hash = getHash(); // obtenes el hash 
    let route = await resolveRoutes(hash); // obtenemos lo ruta
    
    let render = routes[route] ? routes[route] : Error404; // si encuentra la ruta la devulve sino error

    
    content.innerHTML = await render();
    if(route !== '/about'){
        filter.style.display="grid";
    }

    footer.innerHTML = await Footer();
    
    
    
}

export default router;