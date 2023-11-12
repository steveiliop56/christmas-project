"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [song, setSong] = useState("0");
  const [playing, setPlaying] = useState(0);
  const [button_text, setButtonText] = useState("Play");
  const [led1, setLed1] = useState("#b91c1c");
  const [led2, setLed2] = useState("#c2410c");
  const [led3, setLed3] = useState("#a16207");
  const [led4, setLed4] = useState("#15803d");
  const [led5, setLed5] = useState("#0f766e");
  const [led6, setLed6] = useState("#1d4ed8");
  const [led7, setLed7] = useState("#4338ca");
  const [led8, setLed8] = useState("#7e22ce");

  function songParser(e) {
    e.preventDefault();
    if (playing == 0) {
      setPlaying(1);
      setButtonText("Stop Playing");
      fetch("/api/music-playing", {
        method: "POST",
        body: JSON.stringify({ play: true, song: song }),
      });
    } else if (playing == 1) {
      setPlaying(0);
      setButtonText("Play");
      fetch("/api/music-playing", {
        method: "POST",
        body: JSON.stringify({ play: false }),
      });
    }
  }

  function ledParser(e) {
    e.preventDefault();
    var led_req = Object();
    led_req.led1 = led1;
    led_req.led2 = led2;
    led_req.led3 = led3;
    led_req.led4 = led4;
    led_req.led5 = led5;
    led_req.led6 = led6;
    led_req.led7 = led7;
    led_req.led8 = led8;
    fetch("/api/led-strip", {
      method: "POST",
      body: JSON.stringify({ led_req }),
    });
  }

  function SweetsThrower(e) {
    e.preventDefault();
    fetch("/api/sweets-thrower", { method: "POST" });
  }

  const ms = new Date("2023-12-25").getTime() - new Date().getTime();
  const days = Math.ceil(ms / 1000 / 60 / 60 / 24);

  return (
    <div className="h-screen bg-cover bg-[url('/background.jpg')]">
      <div className="bg-red-900 h-16 lg:h-20 text-center text-zinc-100 items-center drop-shadow-md justify-center flex  text-3xl lg:text-4xl bold">
        <h1 className="font-pacifico">Merry Christmas</h1>
      </div>

      <div className="flex pt-3 pl-8 lg:pt-7 lg:pl-14">
        <div className="drop-shadow-md items-center justify-center flex rounded-md absolute bg-gray-900 bg-opacity-95 text-zinc-100 h-5/6 w-11/12">
          <h2 className="text-xl pt-2 font-inter text-center absolute top-1">
            ✨ Days until christmas: {days}✨
          </h2>

          <div className="rounded-md bg-red-800 w-3/12 h-4/6 items-center justify-center text-center mr-16 lg:mr-24 font-roboto">
            <h3 className="mt-3">Sound Selection</h3>
            <form onSubmit={songParser}>
              <select
                onChange={(e) => setSong(e.target.value)}
                defaultValue="0"
                className="cursor-pointer outline-none bg-blue-500 p-2 rounded-md hover:opacity-95 mt-6 w-2/4 sm:w-5/6"
              >
                <option value="0" disabled>
                  Choose a song
                </option>
                <option value="1">All I Want for Christmas Is You</option>
                <option value="2">Last Christmas</option>
                <option value="3">Jingle Bells</option>
                <option value="4">Rudolph</option>
                <option value="5">Rockin' Around the Christmas Tree</option>
                <option value="6">Santa Claus Is Coming to Town</option>
              </select>
              <br />
              <button
                type="submit"
                className={clsx(
                  "p-2 px-5 mt-3 rounded-md shadow-md hover:opacity-95",
                  {
                    "bg-blue-600": playing === 0,
                    "bg-red-600": playing === 1,
                  }
                )}
              >
                {button_text}
              </button>
            </form>
            <Image
              className="h-36 w-32 ml-6 lg:h-96 lg:w-72 lg:ml-6 lg:pb-4"
              src="/snowman.png"
              width={420}
              height={594}
              alt="Snowman"
            ></Image>
          </div>

          <div className="rounded-md bg-green-800 w-3/12 h-5/6 lg:h-4/6 mt-10 lg:mt-0 mr-24 items-center text-center justify-center">
            <h3 className="mt-3">Led Strip Controller</h3>
            <form onSubmit={ledParser}>
              <div className="border-zinc-100 border-2 rounded-md mt-3 w-16 mx-auto">
                <input
                  onChange={(e) => setLed1(e.target.value)}
                  defaultValue="#b91c1c"
                  className="mt-1 appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
                <input
                  onChange={(e) => setLed2(e.target.value)}
                  defaultValue="#c2410c"
                  className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
                <input
                  onChange={(e) => setLed3(e.target.value)}
                  defaultValue="#a16207"
                  className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
                <input
                  onChange={(e) => setLed4(e.target.value)}
                  defaultValue="#15803d"
                  className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
                <input
                  onChange={(e) => setLed5(e.target.value)}
                  defaultValue="#0f766e"
                  className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
                <input
                  onChange={(e) => setLed6(e.target.value)}
                  defaultValue="#1d4ed8"
                  className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
                <input
                  onChange={(e) => setLed7(e.target.value)}
                  defaultValue="#4338ca"
                  className="appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
                <input
                  onChange={(e) => setLed8(e.target.value)}
                  defaultValue="#7e22ce"
                  className="mb-1 appearence-none border-none outline-none [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-none w-3 h-4 lg:w-8 lg:h-9 cursor-pointer bg-transparent"
                  type="color"
                ></input>
                <br></br>
              </div>
              <button
                type="submit"
                className="bg-blue-600 p-2 px-5 mt-3 rounded-md shadow-md hover:opacity-95"
              >
                Set Colors
              </button>
            </form>
          </div>

          <div className="rounded-md bg-yellow-800 w-3/12 h-4/6 items-center justify-center text-center">
            <h3 className="mt-3">Chocolate Thrower</h3>
            <Image
              className="mx-auto mt-3"
              src="/chocolate.png"
              width={620}
              height={400}
              alt="Chocolate"
            ></Image>
            <button
              onClick={SweetsThrower}
              className="bg-blue-600 p-2 lg:p-2 lg:px-5 mt-3 rounded-md shadow-md hover:opacity-95"
            >
              Throw Some Sweets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
