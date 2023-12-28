import { Dispatch, SetStateAction } from "react";

type Props = {
  set: Dispatch<SetStateAction<"" | "red" | "blue" | "green">>;
};

function ButtonsGroup({ set }: Props) {
  return (
    <>
      <button onClick={() => set("red")}>red</button>
      <button onClick={() => set("green")}>green</button>
      <button onClick={() => set("blue")}>blue</button>
    </>
  );
}

export default ButtonsGroup;
