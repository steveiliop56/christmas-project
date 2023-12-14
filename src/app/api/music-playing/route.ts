import { exec } from "child_process";

export async function POST(request: Request) {
  const data = await request.json();
  if (data["play"] == true) {
    exec(`python3 python-handler.py song play ${data["song"]}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  } else {
    exec(`python3 python-handler.py song stop`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  }
  return new Response("", {
    status: 200,
  });
}
