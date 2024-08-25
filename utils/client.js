import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:"Acting like you are a client and give me a webdev project",
});

const generationConfig = {
  temperature: 2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens:8192,
  responseMimeType: "text/plain",
};

export async function run(str) {
  const chatSession = model.startChat({
    generationConfig,
    history:[],
  });

  const result = await chatSession.sendMessage(str);
  return result.response.text();
}
