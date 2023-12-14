import { exec } from "child_process";

export async function POST(request: Request) {
  exec(`python3 python-handler.py servo`, (error, stdout, stderr) => {
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
  return new Response("", {
    status: 200,
  });
}
