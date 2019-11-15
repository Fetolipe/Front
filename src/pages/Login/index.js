import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import signin from "../../assets/signin.svg";
import api from "../../services/api"

export default function Login({ history }) {
  const [email, setEmail] = new useState("")

  const [senha, setSenha] = new useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const user = {
        email,
        senha
      }
      const response = await api.post("/session", user);
      const token = response.data.token;
      if (token) {
        localStorage.setItem("User/token", token)
      }
      history.push("/menu");
    } catch (erro) {
      alert("Erro na autenticação", erro);
    }
  }
  return (
    <Container>
      <div className="quadro">
        <form onSubmit={handleSubmit}>
          <p>
            Log<sub>in</sub>
          </p>
          <label htmlFor="ra">Email</label>
          <input
            type="email"
            required
            placeholder="Seu e-mail"
            id="email"
            onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="ra">Senha</label>
          <input
            type="password"
            required
            placeholder="Sua senha"
            id="senha"
            onChange={(event) => setSenha(event.target.value)} />
          <button type="submit">Entrar</button>

        </form>


        <nav >

          <Link className="link" to="/cadastro">
            <img src={signin} alt="Cadastro" />
            <p>Cadastrar Usuário</p>
          </Link>

          <Link className="link" to="/recup">
            <img src={signin} alt="Home" />
            <p>Recuperar Autenticação</p>
          </Link>
        </nav>
      </div>


    </Container>
  );
}
