import { createBrowserRouter } from "react-router-dom";
import { TodoPage } from "../pages/TodosPage";
import { PokemonPage } from "../pages/PokemonPage";
import { HomePage } from "../pages/HomePage";
import { MainLayout } from "../layouts/main";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "",
          element: <HomePage/>
        },
        {
          path: "todo",
          element: <ProtectedRoutes>
            <TodoPage/>
          </ProtectedRoutes>
        },
        {
          path: "pokemon",
          element: <ProtectedRoutes>
            <PokemonPage/>
          </ProtectedRoutes>
        },

      ]
    },
    
  ]);