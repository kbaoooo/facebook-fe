import Home from '~/pages/Home';
import Authentication from '~/pages/Authentication';
import { AuthenticationLayout, DefaultLayout } from '~/Layout';

//public routes
const publicRoutes = [
    { path: '/', page: Home, layout: DefaultLayout },
    { path: '/auth', page: Authentication, layout: AuthenticationLayout },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
