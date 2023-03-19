import { createBrowserRouter } from "react-router-dom";
import { SearchBlock } from "../components/SearchBlock/SearchBlock";
import { LessonPage } from "../components/LessonPage/LessonPage";
import { LessonsList } from "../components/LessonsList.jsx/LessonsList";
import { Layout } from "../App";
//import MyError from "../error/error";

export const router = createBrowserRouter([
  {
    path: "/genesis-learning-app/",
    element: <Layout />,
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
