import { useState } from "react";
import ChristmasPresent from "./ChristmasPresent";
import ChristmasTree from "./ChristmasTree";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  // TODO v-auto-animate see https://auto-animate.formkit.com/#usage-react
  const [underTheTree, setunderTheTree] = useState([]);
  const [presents, setPresents] = useState([
    "tall-red-gift",
    "small-red-gift",
    "blue-gift",
  ]);

  function onDragStart(e, name) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("name", name);
  }

  function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  const onDrop = (e) => {
    e.preventDefault();
    const name = e.dataTransfer.getData("name");
    console.log(`dragged '${name}' to: `, e.currentTarget);
    setunderTheTree([...underTheTree, name]);
    presents.splice(presents.indexOf(name), 1);
    setPresents(presents);
  };

  const [autoAnimationParent, enableAnimations] = useAutoAnimate();
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <h1 className="mt-8 mb-16 text-xl font-bold">
        Drag the presents under the tree!
      </h1>
      <ChristmasTree
        presents={underTheTree}
        onDrop={onDrop}
        onDragOver={onDragOver}
      />
      <div className="pt-32 mt-32 bg-gray-100 w-full justify-center flex-1">
        <div
          className="flex items-end justify-center"
          ref={autoAnimationParent}
        >
          {presents.map((p) => (
            <ChristmasPresent
              key={p}
              name={p}
              draggable={true}
              onDragStart={(e) => onDragStart(e, p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
