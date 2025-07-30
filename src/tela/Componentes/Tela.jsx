import { useState } from "react";
import styles from "./Tela.module.css";
import { postSm } from "../Funcoes/postSm";
import { Button } from "./Button";
import { MsgInitial } from "./MsgInitial";
import { MsgFinish } from "./MsgFinish";
import { Modal } from "./Modal";
import { verifySenha } from "../Funcoes/verifySenha";
import { Forms } from "./Forms";

export function Tela() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [quadra, setQuadra] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [senhaValid, setSenhaValid] = useState(true);

  async function criar() {
    const respostaVerifySenha = verifySenha(senha);
    setSenhaValid(respostaVerifySenha);
    const resposta = await postSm(nome, email, senha, quadra);
    setModalOpen(true);
    console.log(resposta);
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
  }

  function handleQuadra(e) {
    setQuadra(e.target.value);
    console.log(quadra);
  }

  return (
    <div>
      <div className={styles.container}>
        <MsgInitial />
        {!senhaValid && (
          <p className={styles.flashMsg}>
            A senha deve conter pelo menos 6 caracteres e 1 caractere especial
          </p>
        )}
        <Forms
          handleNome={handleNome}
          handleEmail={handleEmail}
          handleSenha={handleSenha}
          handleQuadra={handleQuadra}
        />
        <Button criar={criar} />

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>Cadastro realizado com sucesso!</h2>
          <p>Bem-vindo ao Sporting Manager 🎉</p>
        </Modal>

        <MsgFinish />
      </div>
    </div>
  );
}
