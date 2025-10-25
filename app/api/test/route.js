export async function GET() {
  return Response.json({ uri: process.env.MONGODB_URI || "undefined" });
}
