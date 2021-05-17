import React from 'react';
import styles from '../styles/components/Searchbar.module.css';
import Button from './layout/Button';

interface SearchbarProps {
  inputText: string;
  loading?: boolean;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => Promise<void>;
}

const Searchbar: React.FC<SearchbarProps> = ({
  inputText,
  handleChange,
  handleSubmit,
  loading,
}) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Digite aqui o título do livro ..."
          className={styles.input}
          value={inputText}
          onChange={handleChange}
        />
        <Button loading={loading} onClick={handleSubmit}>
          Pesquisar
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
