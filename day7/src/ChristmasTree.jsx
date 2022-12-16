import { ReactComponent as Tree } from "./assets/tree.svg";
import ChristmasPresent from "./ChristmasPresent";
export default function ChristmasTree({ presents, ...rest }) {
  return (
    <div className="relative flex justify-center" {...rest}>
      <Tree className="w-64" />
      <div className="flex items-end absolute -bottom-8 -gap-8 presents">
        {presents.map((p) => (
          <ChristmasPresent key={p} name={p} />
        ))}
      </div>
    </div>
  );
}
