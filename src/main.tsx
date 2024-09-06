import { createRoot } from "react-dom/client";
import Root from "./routes/Root";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { Movies } from "./routes/Movies";
import Login from "./routes/Login";
import { MovieDetails, loader as detailsLoader } from "./routes/MovieDetails";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/:id",
        element: <MovieDetails />,
        loader: detailsLoader,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
