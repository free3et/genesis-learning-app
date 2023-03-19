import { createBrowserRouter } from "react-router-dom";
import { LessonPage } from "../components/LessonPage/LessonPage";
import { LessonsList } from "../components/LessonsList.jsx/LessonsList";
import { Layout } from "../App";
import { ErrorComponent } from "../components/ErrorComponent/ErrorComponent";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorComponent />,
      children: [
        {
          element: <LessonsList />,
          index: true,
        },
        {
          element: <LessonPage />,
          path: "/:id",
        },
      ],
    },
  ],
  { basename: "/genesis-learning-app/" }
);
