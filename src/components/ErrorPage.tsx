import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  return (
    <div id="error-page">
      <h1>OOPs</h1>
      <p>Sorry unexpected error occurs</p>
      <p>{error.statusText ?? error.message}</p>
    </div>
  );
};

export default ErrorPage;
