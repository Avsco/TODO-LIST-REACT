import { createBrowserRouter } from "react-router-dom";
import { TodoPage } from "../pages/TodosPage";
import { PokemonPage } from "../pages/PokemonPage";
import { HomePage } from "../pages/HomePage";
import { MainLayout } from "../layouts/main";

export const router = createBrowserRouter([
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
          element: <TodoPage/>
        },
        {
          path: "pokemon",
          element: <PokemonPage/>
        },
      ]
    },
    
  ]);