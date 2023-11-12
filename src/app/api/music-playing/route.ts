import { exec } from "child_process";

export async function POST(request: Request) {
  const data = await request.json();
  if (data["play"] == true) {
    console.log(`sudo python3 python-handler.py song play ${data["song"]}`);
    exec(`sudo python3 python-handler.py song play ${data["song"]}`);
  } else {
    exec(`sudo python3 python-handler.py song stop`);
  }
  return new Response("", {
    status: 200,
  });
}
