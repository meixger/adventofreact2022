export function ItemSelect({ products, selectedValue, onChange }) {
  return <select value={selectedValue} onChange={onChange} className="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    {products && products.map(p => <option key={p.id} value={p.id}>{p.title}</option>
    )}
  </select>;
}
