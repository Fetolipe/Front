import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import signin from "../../assets/signin.svg";

export default function Recup() {
  return (
    <Container>
      <div>
        <form>
          <p>
           Recuperar <sub>Acesso</sub>
          </p>
          <label htmlFor="ra">Email</label>
          <input type="text" />
          <button type="submit">Entrar</button>
        </form>
        <nav>
          <Link className="link" to="/">
            <img src={signin} alt="Login" />
            <p>Retornar ao login</p>
          </Link>
        </nav>
      </div>
     </Container>
  );
}
