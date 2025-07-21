import styles from "./Tela.module.css";

export function MsgInitial() {
  return (
    <div>
      <div className={styles.titulo}>
        <img src="/imagem.jpeg" alt="Ícone" className={styles.icon} />
        <h1>Sporting Manager</h1>
      </div>
      <h2>Cadastro de Usuário</h2>
    </div>
  );
}
