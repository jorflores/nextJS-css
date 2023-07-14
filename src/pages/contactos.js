import React from "react";
import styles from "../styles/contactos.module.css";
import SpecialHeader from "@/components/SpecialHeader";

function contactos() {
  return (
    <div>
      <header id={styles.centrado}>
        <SpecialHeader titulo="Contactos" />
      </header>

      <p className={styles.importante}>Hola</p>

      <p className={styles.secundario}> Parrafo 2</p>
    </div>
  );
}

export default contactos;
