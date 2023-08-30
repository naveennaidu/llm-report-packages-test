export async function register() {
  console.log("Starting instrumentation");
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./tracing.node");
  }
}
