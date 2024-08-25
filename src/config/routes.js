import Home from "../components/home/home";
import FormPage from "../components/form/formPage";
import ReadPage from "../components/read/readPage";
import PageNotFound from "../components/pageNotFound/pageNotFound";

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/form',
        element: <FormPage />,
    },
    {
        path: '/read',
        element: <ReadPage />,
    },
    {
        path: '/*',
        element: <PageNotFound />,
    },
]

export default routes;