import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "",
});

export async function GET(req: Request) {
  try {
    const completion = await openai.chat.completions.create(
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: "Hello world" },
        ],
      },
      {
        headers: {
          "X-User-Id": "test@test.com",
        },
      }
    );

    console.log(completion);

    return new Response(JSON.stringify(completion), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
