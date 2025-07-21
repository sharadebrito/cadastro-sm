import styles from './Tela.module.css'

export function Forms(handleNome, handleEmail, handleSenha, handleQuadra) {
  return (
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
  );
}
