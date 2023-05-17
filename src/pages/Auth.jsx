import { styled } from "styled-components";
import ApiKeyForm from "../components/ApiKeyForm";

export const ContainerApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
