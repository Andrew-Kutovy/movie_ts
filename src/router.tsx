import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import GenresPage from "./pages/GenresPage/GenresPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import UserPage from "./pages/UserPage/UserPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import GenreMovies from "./components/GenreBadge/GenreMovies/GenreMovies";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <MoviesPage />
            },
            {
                path: '/genres',
                element: <GenresPage/>
            },
            {
                path: 'details/:movieId',
                element: <DetailsPage/>
            },
            {
                path: 'user',
                element: <UserPage/>
            },
            {
                path: 'genres/:genreId',
                element: <GenreMovies />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])
export default router