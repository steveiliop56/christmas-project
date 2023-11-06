import Image from 'next/image'

export default function Home() {

  return (
    <div className="h-screen bg-cover bg-[url('/background.jpg')]">

      <div className="bg-red-900 h-20 text-center text-zinc-100 items-center drop-shadow-md justify-center flex text-4xl bold">
        <h1 className="font-pacifico">Merry Christmas</h1>
      </div>

      <div className="drop-shadow-md items-center justify-center flex rounded-md absolute bg-gray-900 bg-opacity-95 top-28 left-8 text-zinc-100 h-5/6 w-[95%]">
        
        <h2 className="text-xl pt-2 font-inter text-center absolute top-1">✨ Days until christmas: 51✨</h2>
        
        <div className="rounded-md bg-red-800 w-3/12 h-4/6 items-center justify-center text-center mr-24 font-roboto">
          <h3 className="mt-3">Sound Selection</h3>
          <select defaultValue="0" className="cursor-pointer outline-none bg-blue-500 p-2 rounded-md opacity-100 hover:opacity-95 mt-6" defaultValue={"0"}>
            <option value="0" disabled>Choose a song</option>
            <option value="1">All I Want for Christmas Is You</option>
            <option value="2">Last Christmas</option>
            <option value="3">Jingle Bells</option>
            <option value="4">Rudolph</option>
            <option value="5">Rockin' Around the Christmas Tree</option>
            <option value="6">Santa Claus Is Coming to Town</option>
          </select>
          <br></br>
          <button className="bg-blue-600 p-2 px-5 mt-3 rounded-md shadow-md hover:opacity-95">Play</button>
          <br></br>
          <Image className="ml-8 " src="/snowman.png" width={260} height={400} alt="Snowman"></Image>
        </div>

      <div className="rounded-md bg-green-800 w-3/12 h-4/6 mr-24 items-center text-center justify-center">
        <h3 className="mt-3">Led Strip Controller</h3>
        <div className="border-zinc-100 border-2 rounded-md mt-3 w-16 mx-auto">
          <input defaultValue="#b91c1c" className="mt-1 appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
          <input defaultValue="#c2410c" className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
          <input defaultValue="#a16207" className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
          <input defaultValue="#15803d" className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
          <input defaultValue="#0f766e" className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
          <input defaultValue="#1d4ed8" className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
          <input defaultValue="#4338ca" className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
          <input defaultValue="#7e22ce" className="mb-1 appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-8 h-9 cursor-pointer bg-transparent" type="color"></input>
          <br></br>
        </div>
        <button className="bg-blue-600 p-2 px-5 mt-3 rounded-md shadow-md hover:opacity-95">Set Colors</button>
      </div>

      <div className="rounded-md bg-yellow-800 w-3/12 h-4/6 items-center justify-center text-center">
        <h3 className="mt-3">Christmas Light<br></br>Controller</h3>
        <Image className="mx-auto mt-3" src="/chocolate-2.png" width={300} height={600} alt="Lights"></Image>
        <button className="bg-blue-600 p-2 px-5 mt-3 rounded-md shadow-md hover:opacity-95">Throw Some Sweets</button>
      </div>

    </div>
  </div>
  )
}
