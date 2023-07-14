import Button from "react-bootstrap/Button";
import SpecialHeader from "@/components/SpecialHeader";

export default function Home() {
  function mifuncion() {
    //alert("Click");
    console.log("Se disparó la alerta");
  }

  const muestraMensaje = () => {
    console.log("Se disparó la alerta desde header");
  };

  return (
    <>
      <br />

      <SpecialHeader titulo="Bienvenidos" />
    </>
  );
}
