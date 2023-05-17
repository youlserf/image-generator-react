import { Button, Grid, TextField } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const ImageGenerator = () => {
  const { user } = useAuth();
  const [image, setImage] = useState("");
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = (event) => {
    setPrompt(event.target.value); // Update the prompt state when the user types
  };

  const generateImage = async () => {
    try {
      const response = await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, key: user }),
      });

      if (response.ok) {
        const { data } = await response.json();
        setImage(data.image);
      } else {
        throw new Error("Failed to generate completion.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error state or display an error message
    }
  };

  const editImage = async () => {
    try {
      const response = await fetch("http://localhost:3000/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, key: user, image }),
      });

      if (response.ok) {
        const { data } = await response.json();
        setImage(data.image);
      } else {
        throw new Error("Failed to generate completion.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error state or display an error message
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minWidth: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {prompt == "" ? (
        <h1 style={{ textAlign: "center" }}>Please describe your image</h1>
      ) : null}

      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        flexGrow={1}
        paddingTop={10}
        gap={5}
      >
        <Grid item>
          {image.length > 0 ? (
            <img src={image} alt="Generated Artwork" />
          ) : (
            <></>
          )}
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <TextField
            label="Enter your description"
            value={prompt}
            onChange={handlePromptChange}
          />
          <div>
            <Button item onClick={generateImage}>
              Generate Image
            </Button>
            <Button item onClick={editImage}>
              Edit Image
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageGenerator;
