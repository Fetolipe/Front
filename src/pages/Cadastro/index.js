import React, { useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import signin from "../../assets/signin.svg";
import api from "../../services/api"



export default function Cadastro({ history }) {
  const [nome, setNome] = new useState("") 
  const [senha, setSenha] = new useState("")
  const [email, setEmail] = new useState("")

async function handleSubmit(event) {
  event.preventDefault()
    try {
      const user = {
        nome,
        email,
        senha
      }
      await api.post("/usuario", user);
      history.push("/");
    } catch (erro) {
     alert("erro ao cadastrar",erro)
    }
  }


  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
           Cadastro 
          </p>
          <label htmlFor="ra">Digite seu Nome</label>
          <input
            type="text"
            required
            placeholder="Nome"
            id="nome"
            onChange={(event) => setNome(event.target.value)}/>
          <label htmlFor="ra">Digite seu Email</label>
          <input  
            type="email"
            required
            placeholder="Email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}/>
          <label htmlFor="ra">Digite sua senha</label>
          <input 
            type="password"
            required
            placeholder="Senha"
            id="senha"
            onChange={(event) => setSenha(event.target.value)} />
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



