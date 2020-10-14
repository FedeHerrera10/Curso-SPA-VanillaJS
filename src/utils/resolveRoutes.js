const resolveRoutes =  (route) => {

    if(route.length <=7){
        let validRoute = !isNaN(route) === true ? '/:id' : route;
        let valid;
        
        switch (validRoute) {
            case ('/') : valid='/'
                break;
            case ('/:id') : valid = validRoute
                break;
             case ('gender') : valid='/filter'
                break;
             case ('species') : valid='/filter'
                break;
             case ('status') : valid='/filter'
                break;
            default:
                valid= `/${route}`; // /about;
                break;
    }
    return valid;
    }
    return `/${route}`; // /about
}
export default resolveRoutes;