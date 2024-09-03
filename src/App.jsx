import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData.jsx";

function App() {
  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;
