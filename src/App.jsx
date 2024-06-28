import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import img from "./assets/Yellow Shoe.png";
import img2 from "./assets/zapato2.png";
import PopUp from "./components/PopUp";

const App = () => {
  const [estado, setEstado] = useState(false);
  const [precio, setPrecio] = useState();

  return (
    <div className="px-5 py-3">
      <div className="flex gap-5">
        <Card
          precio={"20.99"}
          imagen={img}
          nombre={"Air Max 97"}
          setEstado={setEstado}
          setPrecio={setPrecio}
        />
        <Card
          precio={"25.99"}
          imagen={img2}
          nombre={"React Presto"}
          setEstado={setEstado}
          setPrecio={setPrecio}
        />
      </div>
      <Navbar />
      {estado && <PopUp precio={precio} setEstado={setEstado} />}
    </div>
  );
};

export default App;
