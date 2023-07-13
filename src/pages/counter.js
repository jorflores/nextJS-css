import React, { useState, useEffect } from "react";

import styles from "../styles/counter.module.css";

function counter() {
  //  let count = 0;

  // Variable de Estado
  const [count, setCount] = useState(0);

  const [name, setName] = useState("sin nombre");

  useEffect(() => {
    // ir a la BD, obtener el ultimo valor y setearlo en el contador
    // setCount(62);
  }, []);

  function incrementar() {
    setCount(count + 1);

    // count = count + 1;
    console.log(count);
  }

  function decrementar() {
    setCount(count - 1);
    // count = count - 1;
    console.log(count);
  }

  function actualizaNombre() {
    setName("Hector");
  }

  return (
    <div className={styles.counter}>
      <h2>Counter: {count} </h2>
      <h2>Nombre: {name} </h2>

      <div className={styles.buttons}>
        <button onClick={incrementar} className={styles.button}>
          +
        </button>
        <button onClick={decrementar} className={styles.button}>
          -
        </button>

        <button onClick={actualizaNombre} className={styles.button}>
          Actualiza Nombre
        </button>
      </div>
    </div>
  );
}

export default counter;
