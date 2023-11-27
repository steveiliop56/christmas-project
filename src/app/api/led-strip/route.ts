import { exec } from "child_process";

export async function POST(request: Request) {
  const data = await request.json();
  var command =
    "python3 python-handler.py pixels " +
    data["led_req"]["led1"] +
    data["led_req"]["led2"] +
    data["led_req"]["led3"] +
    data["led_req"]["led4"] +
    data["led_req"]["led5"] +
    data["led_req"]["led6"] +
    data["led_req"]["led7"] +
    data["led_req"]["led8"];
  command = command.replaceAll("#", " ");
  exec(command);
  return new Response("", {
    status: 200,
  });
}
