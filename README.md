# Image Generator React Client

This is a React client application that consumes the Image Generation and Editing API. It allows users to generate and edit images using the OpenAI API. The client is built with React and integrates with various libraries and dependencies for UI components and API communication.

## Prerequisites
Before running the React client, make sure you have the following prerequisites:

- Node.js installed on your system
- Access to a running instance of the Image Generation and Editing API

## Installation
To install and run the React client, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Install the dependencies by running the following command:
npm install

markdown
Copy code
3. Create a `.env` file in the project directory to store any necessary environment variables.
4. Set the environment variable `REACT_APP_API_URL` in the `.env` file and provide the URL of the running instance of the Image Generation and Editing API. For example:
REACT_APP_API_URL=http://localhost:3000

sql
Copy code
5. Start the React development server by running the following command:
npm run dev

markdown
Copy code
The React client will start running on `http://localhost:3000`.

## Usage
Once the React client is running, you can access it through your web browser at `http://localhost:3000`. The client provides a user interface for generating and editing images using the Image Generation and Editing API.

## Demo
### Enter your API key
![Enter your API key](https://raw.githubusercontent.com/youlserf/image-generator-react/8870775dbb35e2f4e2b2b7b5b487b6d7c66d3c49/public/enter_key.png) 
### Describe your image
![Describe your image](https://raw.githubusercontent.com/youlserf/image-generator-react/8870775dbb35e2f4e2b2b7b5b487b6d7c66d3c49/public/describe.png) 
### Generate your image
![Describe your image](https://raw.githubusercontent.com/youlserf/image-generator-react/8870775dbb35e2f4e2b2b7b5b487b6d7c66d3c49/public/generate.png) 
### Edit your image
![Describe your image](https://raw.githubusercontent.com/youlserf/image-generator-react/8870775dbb35e2f4e2b2b7b5b487b6d7c66d3c49/public/edit.png) 

