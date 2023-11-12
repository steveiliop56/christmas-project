export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  return Response.json({ ok: true });
}

// import { exec } from "child_process"

// export async function POST(request: Request) {
//     python_handler(Response.json({ request }))
//     return Response.json({ request })
// }

// function python_handler (request) {
//     console.log(request)
//     exec(`python3 python-handler.py ${request}`)
// }
