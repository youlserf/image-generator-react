import React from "react";
import { styled } from "styled-components";
import ApiKeyForm from "../components/ApiKeyForm";

const ContainerApp = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Auth = () => {
  return (
    <ContainerApp>
      <ApiKeyForm />
    </ContainerApp>
  );
};

export default Auth;
