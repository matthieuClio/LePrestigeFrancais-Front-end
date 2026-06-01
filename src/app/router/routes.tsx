// Types
import type { RouteObject } from "react-router";

// Features pages
import Home from "../../features/home/pages/Home";
import Exercises from "../../features/exercises/pages/Exercises";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/exercices',
        element: <Exercises />
    }
];