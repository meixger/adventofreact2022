import { ReactComponent as TallRedGift } from "./assets/tall-red-gift.svg";
import { ReactComponent as SmallRedGift } from "./assets/small-red-gift.svg";
import { ReactComponent as BlueGift } from "./assets/blue-gift.svg";
export default function ChristmasPresent({ name }) {
  return (
    <div>
      {name === "tall-red-gift" && <TallRedGift className="w-32" />}
      {name === "small-red-gift" && <SmallRedGift className="w-32" />}
      {name === "blue-gift" && <BlueGift className="w-32" />}
    </div>
  );
}
