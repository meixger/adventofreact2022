import { useLayoutEffect } from "react"
import { useState } from "react"

function fetchJoke() {
  const url = "https://v2.jokeapi.dev/joke/christmas"
  return fetch(url)
    .then(res => res.json())
}

function App() {
  const [step, setStep] = useState(1)
  const [joke, setJoke] = useState()
  useLayoutEffect(() => {
    getNextJoke()
  }, [])

  function getNextJoke() {
    return fetchJoke().then(joke => {
      setJoke(joke)
    })
  }

  const onClick = () => {
    if (step == 1)
      setStep(2)
    else {
      getNextJoke()
      setStep(1)
    }
  }

  return (
    <div className="container m-auto">
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col bg-slate-200 p-5">
          <div className="mr-10 my-5 p-5 rounded-xl rounded-br-none bg-blue-300">
            {joke?.setup}
          </div>
          {step == 2 &&
            <div className="ml-10 mb-5 p-5 rounded-xl rounded-tl-none bg-teal-800 text-white">{joke.delivery}</div>}
          <button className="p-3 rounded bg-blue-800 text-white" onClick={onClick}>
            {step == 1 ? "Tell Me!" : "Another"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App