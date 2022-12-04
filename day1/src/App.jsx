import { useState, useEffect } from "react";
import { useDebounce } from "./debounce";

const findProducts = async term => {
  const url = 'https://dummyjson.com/products/search?limit=20&select=id,title,price&q=' + term;
  return fetch(url)
    .then(res => res.json())
    .then(json => json.products)
    .catch(err => {
      alert(err);
    });
}

function App() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [result, setResult] = useState([]);

  useEffect(() => {
    findProducts(debouncedSearchTerm)
      .then(_ => {
        setResult(_);
      })
    setLoading(false);
  }, [debouncedSearchTerm]);

  const onInputChange = (e) => {
    setLoading(true);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl font-bold">Gift Search Bar</h1>
        <div className="flex items-center">
          <input type="text" className="p-2 border-2 border-gray-dark" placeholder="Start typing..." onChange={onInputChange} />
        </div>
        <ul className="list-disc">
          {loading
            ? (<li>loading...</li>)
            : !(result?.length > 0)
              ? (<li>No Result</li>)
              : result.map(_ =>
                (<li key={_.id}>{`${_.title} ${_.price}$`}</li>)
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default App
