import React from "react";

function render() {
  // Simulamos que estos datos vienen de la base.

  const nombre = ["Alberto", "Omar", "Jessica", "Jose"];

  return (
    <div>
      <h1>Renderizado de listas</h1>
      {nombre.map((elemento, index) => (
        <p key={index}>
          Elemento # {index} {elemento}
        </p>
      ))}
    </div>
  );
}

export default render;
