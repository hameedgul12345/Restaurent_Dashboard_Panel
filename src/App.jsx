import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import 'remixicon/fonts/remixicon.css'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <h1 className="text-red font-bold">Hello</h1>
   <div className="w-10 bg-sky-500/100">Hello</div>
    </>
  );
}

export default App;
