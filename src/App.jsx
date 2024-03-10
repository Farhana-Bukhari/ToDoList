import { useState } from "react";
import "./App.css";
import DataInput from "./components/DataInput";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  console.log(listTodo);
  return (
    <>
      <DataInput addList={addList} />
    </>
  );
}

export default App;
