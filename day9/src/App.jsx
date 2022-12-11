import { useEffect } from "react";
import { useState } from "react";
import presents from "./presents.json";

function App() {
  const [presentsSorted, setPresentsSorted] = useState(presents);
  const [sortFunctionActive, setSortFunctionActive] = useState("default");

  const sortFunctions = {
    smallToBig: (a, b) =>
      a.dimensions.width * a.dimensions.height -
      b.dimensions.width * b.dimensions.height,
    default: (a, b) => a.id - b.id,
  };

  useEffect(() => {
    setPresentsSorted([...presents].sort(sortFunctions[sortFunctionActive]));
  }, [sortFunctionActive]);

  function sort() {
    setSortFunctionActive(
      sortFunctionActive == "default" ? "smallToBig" : "default"
    );
  }

  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <div className="max-w-md">
        <div>
          <img src="/assets/tree.svg" alt="Christmas tree" />
        </div>
        <div className="mt-2 flex justify-center items-center">
          {presentsSorted.map((p) => (
            <img
              key={p.id}
              src={p.src}
              alt={`Present ${p.id}`}
              data-qa="present"
            />
          ))}
        </div>
        <button
          className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center mx-auto mt-8"
          onClick={sort}
        >
          Toggle sort
        </button>
      </div>
    </div>
  );
}

export default App;
