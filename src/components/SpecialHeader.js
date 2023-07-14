import React from "react";
import styles from "../styles/specialheader.module.css";

// Agregamos un argumento en la funcion, normalmente tiene el nombre: props

function SpecialHeader(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.special}> {props.titulo} </h1>
    </div>
  );
}

export default SpecialHeader;
