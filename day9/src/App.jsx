import presents from "./presents.json";

function App() {
  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <div className="max-w-md">
        <div>
          <img src="/assets/tree.svg" alt="Christmas tree" />
        </div>
        <div className="mt-2 flex justify-center items-center">
          {presents.map((p) => (
            <img
              key={p.id}
              src={p.src}
              alt={`Present ${p.id}`}
              data-qa="present"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
