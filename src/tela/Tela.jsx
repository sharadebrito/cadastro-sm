import { useState } from "react";
import styles from "./Tela.module.css";
import { postSm } from "./postSm";
import { Forms } from "./Forms";
import { Button } from "./Button";
import { MsgInitial } from "./MsgInitial";
import { MsgFinish } from "./MsgFinish";

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
        <MsgInitial />
        <Forms
          handleNome={handleNome}
          handleEmail={handleEmail}
          handleSenha={handleSenha}
          handleQuadra={handleQuadra}
        />
        <Button criar={criar} />
        <MsgFinish />
      </div>
    </div>
  );
}
