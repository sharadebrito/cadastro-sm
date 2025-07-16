import { useState } from "react";
import styles from "./Tela.module.css";
import axios from "axios";

async function postSm(name, email, senha, quadra) {
  const response = await axios.post(
    "https://sporting-manager-api.onrender.com/user",
    {
      name: name,
      email: email,
      password: senha,
      local_name: quadra,
    }
  );
  return response;
}

export function Tela() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [quadra, setQuadra] = useState("");

  async function criar() {
    const resposta = await postSm(nome, email, senha, quadra);
    console.log(resposta);
    console.log(nome, email, senha, quadra);
  }

  function handleNome(e) {
    setNome(e.target.value);
    console.log(nome);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  function handleSenha(e) {
    setSenha(e.target.value);
    console.log(senha);
  }

  function handleQuadra(e) {
    setQuadra(e.target.value);
    console.log(quadra);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <img src="/imagem.jpeg" alt="Ícone" className={styles.icon} />
          <h1>Sporting Manager</h1>
        </div>
        <h2>Cadastro de Usuário</h2>
        <div className={styles.forms}>
          <div className={styles.boxInput}>
            <label htmlFor="inputId">Nome:</label>
            <input
              type="text"
              id="inputId"
              placeholder="Digite seu nome"
              onChange={handleNome}
            />
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="inputId">E-mail:</label>
            <input
              type="text"
              id="inputId"
              placeholder="Digite seu e-mail"
              onChange={handleEmail}
            />
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="inputId">Senha:</label>
            <input
              type="text"
              id="inputId"
              placeholder="Digite sua senha"
              onChange={handleSenha}
            />
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="inputId">Quadra:</label>
            <input
              type="text"
              id="inputId"
              placeholder="Digite o nome da quadra"
              onChange={handleQuadra}
            />
          </div>
        </div>
        <div>
          <button onClick={criar}>
            <b>Cadastrar</b>
          </button>
        </div>
        <a href="https://www.manager-sportings.com.br/login">
          Já tem uma conta? Entrar
        </a>
      </div>
    </div>
  );
}
