import { llmReportSdk } from "llm-report";

export const sdk = llmReportSdk(
  "852ca30464bd8cb64200cb07087cc699ece14785bf9ab8be577af69dd1070a37",
  "http://localhost:3000/api/v1/log/openai"
);
sdk.start();
