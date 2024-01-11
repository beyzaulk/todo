import React, { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Tasks />
    </>
  );
}

export default App;
