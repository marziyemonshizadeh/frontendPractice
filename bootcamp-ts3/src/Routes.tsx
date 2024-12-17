import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FirstExercise from "./components/pages/FirstExercise";
import ForthExercise from "./components/pages/ForthExercise";
import SecondExercise from "./components/pages/SecondExercise";
import ThirdExercise from "./components/pages/ThirdExercise";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/firstExercise", element: <FirstExercise /> },
      { path: "/SecondExercise", element: <SecondExercise /> },
      { path: "/thirdExercise", element: <ThirdExercise /> },
      { path: "/forthExercise", element: <ForthExercise /> },
    ],
  },
]);
