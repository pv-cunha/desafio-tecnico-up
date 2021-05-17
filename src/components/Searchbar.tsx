import React from 'react';
import { useBook } from '../context/BookContext';
import styles from '../styles/components/Searchbar.module.css';
import Button from './layout/Button';

interface SearchbarProps {
  loading?: boolean;
  handleSubmit: () => Promise<void>;
}

const Searchbar: React.FC<SearchbarProps> = ({ handleSubmit, loading }) => {
  const { text, setText } = useBook();

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Digite aqui seu livro ..."
          className={styles.input}
          value={text}
          onChange={handleInputChange}
        />
        <Button loading={loading} onClick={handleSubmit}>
          Pesquisar
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
