import { exec } from "child_process";

export async function POST(request: Request) {
  const data = await request.json();
  exec(`python3 python-handler.py servo`);
  return new Response("", {
    status: 200,
  });
}
