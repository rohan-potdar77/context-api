import { ChangeEvent, createContext, useState } from "react";
import "./App.css";
import SiblingOne from "./SiblingOne";
import SiblingTwo from "./SiblingTwo";

export const DataContext = createContext<string>("");

function App() {
  const [data, setData] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setData(event.target.value);

  console.log("App.tsx");
  return (
    <>
      <h1>App.tsx</h1>
      <input value={data} onChange={handleChange} />
      <hr/>
      <DataContext.Provider value={data}>
        <SiblingOne />
        <SiblingTwo />
      </DataContext.Provider>
    </>
  );
}

export default App;
