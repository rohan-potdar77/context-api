import { memo, useContext } from "react";
import { DataContext } from "./App";

const SiblingTwo = () => {
  const data = useContext(DataContext);

  console.log("SiblingTwo.tsx");
  return (
    <>
      <h1>SiblingTwo.tsx</h1>
      <h1>Value: {data}</h1>
      <hr />
    </>
  );
};

export default memo(SiblingTwo);
