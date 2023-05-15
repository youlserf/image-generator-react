import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { ProtectedLayout } from "./ProtectedRoute";
import { AuthProvider } from "./AuthProvider";
import { AuthLayout } from "./AuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<Auth />} />
      <Route path="home" element={<ProtectedLayout />}>
        <Route path="profile" element={<h1>Profile</h1>} />
        <Route path="settings" element={<h1>Settings</h1>} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
