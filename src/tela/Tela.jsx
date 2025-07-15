import styles from "./Tela.module.css";
import { MdCalendarMonth } from "react-icons/md";

export function Tela() {
  function criar() {
    console.log("Criou com sucesso");
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
            <input type="text" id="inputId" />
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="inputId">E-mail:</label>
            <input type="text" id="inputId" />
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="inputId">Senha:</label>
            <input type="text" id="inputId" />
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="inputId">Quadra:</label>
            <input type="text" id="inputId" />
          </div>
        </div>
        <div>
          <button onClick={criar}>
            <b>Cadastrar</b>
          </button>
        </div>
      </div>
    </div>
  );
}
