import { ReactComponent as TallRedGift } from "./assets/tall-red-gift.svg"
import { ReactComponent as SmallRedGift } from "./assets/small-red-gift.svg"
import { ReactComponent as BlueGift } from "./assets/blue-gift.svg"
import { useDrag } from "react-dnd"

export default function ChristmasPresent({ isDraggable, name }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "cristmaspresent",
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div ref={isDraggable ? dragRef : undefined} className={isDragging ? "opacity-10" : ""}>
      {name === 'tall-red-gift' && <TallRedGift className="w-32" />}
      {name === 'small-red-gift' && <SmallRedGift className="w-32" />}
      {name === 'blue-gift' && <BlueGift className="w-32" />}
    </div>
  )
}
