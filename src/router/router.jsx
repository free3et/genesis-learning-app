import { createBrowserRouter } from "react-router-dom";
import { SearchBlock } from "../components/SearchBlock/SearchBlock";
import { LessonPage } from "../components/LessonPage/LessonPage";
import { LessonsList } from "../components/LessonsList.jsx/LessonsList";
import { App } from "../App";
//import MyError from "../error/error";

export const router = createBrowserRouter([
  {
    path: "/genesis-learning-app/",
    element: <App />,
    //errorElement: <MyError />,
    children: [
      {
        element: <LessonsList />,
        index: true,
      },
      {
        element: <LessonPage />,
        path: "/genesis-learning-app/:id",
      },
    ],
  },
]);