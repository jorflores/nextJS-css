import React from "react";
import styles from "../styles/contactos.module.css";

function contactos() {
  return (
    <div>
      <header id={styles.centrado}>
        <h1>Contactos</h1>
      </header>

      <p className={styles.importante}>Hola</p>

      <p className={styles.secundario}> Parrafo 2</p>
    </div>
  );
}

export default contactos;
