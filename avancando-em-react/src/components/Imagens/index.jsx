import styles from "./style.module.css";

// Imagem na pasta assets
import natureza from '../../assets/natureza-2.avif';

const Imagens = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Imagem na pasta Public */}
        <img src="/natureza-1.avif" alt="Natureza" />
        {/* Imagem na pasta assets */}
        <img src={natureza} alt="Natureza" />
      </div>
      <hr />
    </>
  );
};

export default Imagens;
