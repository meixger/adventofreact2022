import { useState } from "react"

function App() {

  return (
    <div className="grid h-screen place-items-center">
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <div className="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
            <div className="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
              <img src="/assets/santa.svg" alt="" className="max-w-[12em]" />
              <div>
                <h1 className="font-serif text-4xl">Happy Holidays!</h1>
                <div className="mt-4 bg-white text-black p-2 rounded">TO: TODO</div>
                <div className="mt-2 bg-white text-black p-2 rounded">FROM: TODO</div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label className="block">
              To:
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              />
            </label>
            <label className="mt-2 block">
              From:
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
