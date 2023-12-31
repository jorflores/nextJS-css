import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contactos">Contactos</Nav.Link>
            <Nav.Link href="/gastos">Gastos</Nav.Link>
            <Nav.Link href="/counter">Counter</Nav.Link>
            <Nav.Link href="/conditional">Conditional</Nav.Link>
            <Nav.Link href="/forms">Forms</Nav.Link>
            <Nav.Link href="/render">Renderizado Listas</Nav.Link>
            <Nav.Link href="/consulta">Consulta de Datos/API</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
