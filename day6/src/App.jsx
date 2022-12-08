import { useEffect, useState } from "react"
import { ComparisonSummary } from "./ComparisonSummary";
import { ItemSelect } from "./ItemSelect";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchData();
  }, [])

  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [result, setResult] = useState({ count: 0, title1: "", title2: "" });

  useEffect(() => {
    if (p1 && p2) {
      var product1 = products[p1];
      var product2 = products[p2];
      if (product1.price < product2.price) {
        const temp = product1;
        product1 = product2;
        product2 = temp;
      }
      setResult({ count: Math.trunc(product1.price / product2.price), title1: product2.title, title2: product1.title })
    }
  }, [p1, p2])

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-bold">Select items to compare</h1>
      <div className="flex flex-col gap-5 justify-center">
        <ItemSelect products={products} selectedValue={p1} onChange={(e) => setP1(e.target.selectedOptions[0].value)} />
        <ItemSelect products={products} selectedValue={p2} onChange={(e) => setP2(e.target.selectedOptions[0].value)} />
      </div>
      <ComparisonSummary result={result} />
    </div>
  )
}

export default App
