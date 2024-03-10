import React, { useState } from "react";

export default function DataInput(props) {
  const [task, setTask] = useState("");
  return (
    <div className="bg-slate-200 rounded-md  flex justify-between ">
      <input
        className="bg-transparent py-2 px-4  flex-1 outline-none"
        type="text"
        placeholder="What needs to be done✊"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-md"
        onClick={() => {
          props.addList(task);
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
}
