import React from 'react';
import styles from '../styles/components/Searchbar.module.css';

interface SearchbarProps {
  inputText: string;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Searchbar: React.FC<SearchbarProps> = ({
  inputText,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className={styles.searchBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite aqui o título do livro ..."
          className={styles.input}
          value={inputText}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Pesquisar
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
