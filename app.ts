import express, { Express } from "express";
import { Configuration, OpenAIApi } from "openai";
import { sdk } from "./tracing";

const OPENAI_API_KEY: string = "";

const PORT: number = parseInt(process.env.PORT || "8080");
const app: Express = express();
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
  baseOptions: {
    headers: {
      "X-User-Id": `dillion@gmail.com`,
    },
  },
});
const openai = new OpenAIApi(configuration);

app.get("/", async (req, res) => {
  try {
    await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Say Test" }],
    });

    await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hi" }],
      stream: true,
    });
  } catch (error) {}

  res.send("Hello world");
});

const server = app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});

server.on("close", async () => {
  console.log("Shutting down");

  await sdk.shutdown();
});
