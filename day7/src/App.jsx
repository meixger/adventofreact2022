import { useState } from "react"
import ChristmasPresent from "./ChristmasPresent";
import ChristmasTree from "./ChristmasTree"

function App() {
  // TODO implement animation - replace v-auto-animate with react pendant https://auto-animate.formkit.com/#usage-react
  const [underTheTree, setunderTheTree] = useState([]);
  const [presents, setPresents] = useState(["tall-red-gift", "small-red-gift", "blue-gift"]);

  function moveToUnderTheTree(name) {
    setunderTheTree([...underTheTree, name]);
    const index = presents.indexOf(name);
    presents.splice(index, 1);
    setPresents(presents);
  }

  return (
    <div className="flex flex-col items-center mt-24 min-h-screen w-full">
      <h1 className="mt-8 text-xl font-bold">Drag the presents under the tree!</h1>
      <ChristmasTree presents={underTheTree} moveToUnderTheTree={moveToUnderTheTree} className="mt-16" />
      <div className="pt-32 mt-32 bg-gray-100 w-full justify-center flex-1">
        <div className="flex items-end justify-center" data-v-auto-animate>
          {presents.map(p => <ChristmasPresent key={p} name={p} isDraggable />)}
        </div>
      </div>
    </div>
  )
}

export default App
