import React, { useState } from "react";
import { Button, TextField, Snackbar } from "@mui/material";
import { styled } from "styled-components";
import { OpenAIApi, Configuration } from "openai";

function App() {
  const initialSnackbar = {
    state: false,
    message: "Please enter an API key.",
  };

  const [apiKey, setApiKey] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(initialSnackbar);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform any necessary actions with the API key here

    if (!apiKey) {
      setIsSnackbarOpen({ state: true, message: "Please enter an API key." });
      return;
    }

    //Perform the API key validation here
    const isValidApiKey = await validateApiKey(apiKey);
    if (isValidApiKey) {
      console.log("API key:", apiKey);
      // Continue with your desired actions
    } else {
      // Handle invalid API key
      setIsSnackbarOpen({ state: true, message: "Invalid API key" });
    }
  };

  const validateApiKey = async (apikey) => {
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);
    try {
      await openai.listModels();
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(initialSnackbar);
  };
  return (
    <ContainerApp>
      <form onSubmit={handleSubmit} style={styles.form}>
        <TextField
          label="API Key"
          value={apiKey}
          onChange={handleApiKeyChange}
          fullWidth
        />
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
        <Snackbar
          open={isSnackbarOpen.state}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message={isSnackbarOpen.message}
        />
      </form>
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};
