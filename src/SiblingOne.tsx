import { memo, useContext } from "react";
import { DataContext } from "./App";

const SiblingOne = () => {
  const data = useContext(DataContext);

  console.log("SiblingOne.tsx");
  return (
    <>
      <h1>SiblingOne.tsx</h1>
      <h1>Value: {data}</h1>
      <hr/>
    </>
  );
};

export default memo(SiblingOne);
