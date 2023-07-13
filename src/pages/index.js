import Button from "react-bootstrap/Button";

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
      <Button onClick={mifuncion} variant="primary">
        Click Me!
      </Button>

      <h1 onClick={muestraMensaje}>Soy un encabezado</h1>
    </>
  );
}
