import React, { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Task />
    </>
  );
}

export default App;
