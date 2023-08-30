import { llmReportSdk } from "llm-report";

export const sdk = llmReportSdk(
  "0937fbc4b13dd9cd8dd910bed1ae6000b99cbe7738b749fad857b51f5811c8d7",
  "http://localhost:3000/api/v1/log/openai"
);
sdk.start();
