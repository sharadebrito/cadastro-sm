import styles from './Tela.module.css'
import { Label } from './Label';
import { Input } from './Input';

export function Forms({handleNome, handleEmail, handleSenha, handleQuadra}) {
  return (
    <div className={styles.forms}>
      <div className={styles.boxInput}>
        <Label name="Nome:"/>
        <Input
          type="text"
          id="inputId"
          placeholder="Digite seu nome"
          onChange={handleNome}
        />
      </div>
      <div className={styles.boxInput}>
        <Label name="E-mail:"/>
        <Input
          type="text"
          id="inputId"
          placeholder="Digite seu e-mail"
          onChange={handleEmail}
        />
      </div>
      <div className={styles.boxInput}>
        <Label name="Senha:"/>
        <Input
          type="text"
          id="inputId"
          placeholder="Digite sua senha"
          onChange={handleSenha}
        />
      </div>
      <div className={styles.boxInput}>
        <Label name="Quadra:"/>
        <Input
          type="text"
          id="inputId"
          placeholder="Digite o nome da quadra"
          onChange={handleQuadra}
        />
      </div>
    </div>
  );
}
