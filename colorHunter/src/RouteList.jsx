import Create from "./pages/Create";
import Main from "./pages/Main";

export default [
    {
        path: '/',
        element: Main,
        props: 'Main',
    },

    {
        path: '/popular',
        element: Main,
        props: 'Main',
    },

    {
        path: '/create',
        element: Create,
        props: 'Create',
    }
]