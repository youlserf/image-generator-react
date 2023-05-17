import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/ErrorPage";
import ImageGenerator from "./pages/ImageGenerator";
import { ProtectedLayout } from "./hooks/ProtectedRoute";

import { AuthLayout } from "./hooks/AuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<Auth />} />
      <Route path="home" element={<ProtectedLayout />}>
        <Route index element={<ImageGenerator />} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
