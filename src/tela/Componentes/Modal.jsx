import styles from "./Tela.module.css";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Se não estiver aberto, não mostra nada

  return (
    <div className={styles.overlayStyle}>
      <div className={styles.modalStyle}>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
