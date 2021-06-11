import Filmes from '../pages/Filmes/index';
import Cinemas from '../pages/Cimemas/index';
import Sessoes from '../pages/Sessoes/index';


export const routesConfig = [
    {
        path: "/filmes",
        component: Filmes,
        exact: true
    },
    {
        path: "/cinemas",
        component: Cinemas,
        exact: true
    },
    {
        path: "/Sessoes",
        component: Sessoes,
        exact: true
    },
    
]