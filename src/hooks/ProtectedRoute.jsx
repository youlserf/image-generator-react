import { Link, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ContainerApp } from "../pages/Auth";
import { styled } from "styled-components";
import { AppBar, Button, Divider, Toolbar } from "@mui/material";

const ContainerHomeLayout = styled(ContainerApp)`
  justify-content: flex-start;
  align-items: center;
`;
export const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return redirect("/");
  }

  return (
    <ContainerHomeLayout>
      <AppBar style={{ backgroundColor: "transparent", position: "relative" }}>
        <Toolbar style={{ gap: 10 }}>
          <Button component={Link} to="/" color="inherit">
            Enter a new ApiKey
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </ContainerHomeLayout>
  );
};
