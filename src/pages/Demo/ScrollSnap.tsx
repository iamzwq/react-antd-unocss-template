import { FC } from "react";

const ScrollSnap: FC = () => {
  return (
    <ul className="flex w-[300px] h-[324px] mx-auto shadow overflow-auto snap-x snap-mandatory">
      {new Array(3).fill(0).map((_, i) => (
        <li key={i} className="snap-start">
          <img
            className="w-[300px] h-[300px]"
            src={`https://picsum.photos/300/300?t=${i}`}
            alt=""
          />
        </li>
      ))}
    </ul>
  );
};

export default ScrollSnap;
