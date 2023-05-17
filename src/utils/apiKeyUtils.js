import { Configuration, OpenAIApi } from "openai";

export const createApiConfiguration = (apikey) => {
  const configuration = new Configuration({
    apiKey: apikey,
  });
  const openai = new OpenAIApi(configuration);
  return openai;
};

export const validateApiKey = async (apikey) => {
  try {
    let openai = createApiConfiguration(apikey);
    await openai.listModels();
    return true;
  } catch (error) {
    return false;
  }
};
