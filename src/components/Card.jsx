import React from "react";

const Card = ({ imagen, nombre, precio, setEstado, setPrecio }) => {
  return (
    <div
      className="bg-gray-200 border border-black w-fit rounded-xl p-3"
      onClick={()=>{
        setEstado(true)
        setPrecio(precio)
      }}
    >
      <img className="w-[200px]" src={imagen} alt={nombre} />
      <h3 className="font-extrabold">{nombre}</h3>
      <h4>${precio}</h4>
    </div>
  );
};

export default Card;
