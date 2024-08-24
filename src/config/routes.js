import Home from "../components/home";
import FormPage from "../components/formPage";
import ReadPage from "../components/readPage";
import PageNotFound from "../components/pageNotFound";

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