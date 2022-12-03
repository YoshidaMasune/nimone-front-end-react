import React from "react";
import Login from "../login/Login";
import { Container } from "./createNew/create.styled";

type Props = {};

function Admin({}: Props) {
  return (
    <div>
      <Container>
        <div style={{ maxWidth: "max-content", margin: "0 auto" }}>
          <Login />
        </div>
      </Container>
    </div>
  );
}

export default Admin;
