import { Link, Outlet, redirect } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return redirect("/");
  }

  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
};
