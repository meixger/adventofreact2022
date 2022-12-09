import { ReactComponent as Tree } from "./assets/tree.svg"
import ChristmasPresent from "./ChristmasPresent"
import { useDrop } from "react-dnd"

export default function ChristmasTree({ presents, moveToUnderTheTree }) {
  const [{ isOver }, dropRef] = useDrop({
    accept: "cristmaspresent",
    drop: (item) => moveToUnderTheTree(item.name),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div className="relative flex justify-center" ref={dropRef}>
      <Tree className="w-64" />
      <div className="flex items-end absolute -bottom-8 -gap-8 presents" data-v-auto-animate>
        {presents.map(p => <ChristmasPresent key={p} name={p} />)}
      </div>
    </div>
  )
}
