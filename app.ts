import express, { Express } from "express";
import { Configuration, OpenAIApi } from "openai";
import { RequestInfo, RequestInit, Response } from "node-fetch";
import { llmReportSdk } from "llm-report-node";
const _importDynamic = new Function("modulePath", "return import(modulePath)");

export const nodeFetch = async function (
  url: URL | RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const { default: fetch } = await _importDynamic("node-fetch");
  return fetch(url, init);
};

const sdk = llmReportSdk(
  "f318801ca9b6860fadb1bf1c328ba8ccc08757e96aa1ffae1ac550b0a0f006ba",
  "http://localhost:3000/api/v1/log/openai"
);
sdk.start();

const PORT: number = parseInt(process.env.PORT || "8080");
const app: Express = express();
const configuration = new Configuration({
  apiKey: "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",
  baseOptions: {
    headers: {
      "X-User-Id": `mnaveennaidu9927@gmail.com`,
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

  const response = await nodeFetch("https://example.com");
  res.send("Hello world");
});

const server = app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});

server.on("close", async () => {
  console.log("Shutting down");

  await sdk.shutdown();
});
