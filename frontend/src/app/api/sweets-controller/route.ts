export async function POST(request: Request) {
    const res = await request.json()
    return Response.json({ res })
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