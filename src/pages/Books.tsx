import React from 'react';
import styles from '../styles/pages/Dashboard.module.css';
import { api } from '../services/api';
import { useBook } from '../context/BookContext';
import { maxResults } from '../utils/Pagination';
import Searchbar from '../components/Searchbar';
import BookItem from '../components/BookItem';
import Button from '../components/layout/Button';
import Loading from '../components/layout/Loading';

const Books: React.FC = () => {
  const {
    books,
    loading,
    setBooks,
    setLoading,
    text,
    setText,
    pages,
    setPages,
  } = useBook();

  React.useEffect(() => {
    if (text !== '') {
      handleSubmit();
    }

    // eslint-disable-next-line
  }, [pages]);

  React.useEffect(() => {
    if (text === '') {
      setPages(0);
    }

    // eslint-disable-next-line
  }, [text]);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await api.getVolumes(text, pages).then((res) => setBooks(res.data.items));
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const nextPage = async () => {
    if (pages >= 0) {
      setPages(pages + maxResults);
    }
  };

  const returnPage = () => {
    if (pages + maxResults === 6) {
      setPages(0);
    } else {
      setPages(pages - maxResults);
    }
  };

  const booksFiltered = React.useMemo(() => {
    return books.filter(
      (book) => book.volumeInfo.imageLinks?.thumbnail !== undefined,
    );
  }, [books]);

  return (
    <section className={`container animeLeft`}>
      <Searchbar
        inputText={text}
        handleChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {loading && <Loading />}

      {books && books.length !== 0 ? (
        <div className={styles.container}>
          <div className={styles.btnPages}>
            <Button onClick={returnPage}>Voltar</Button>
            <Button onClick={nextPage}>Avançar</Button>
          </div>
          <div className={styles.books}>
            {booksFiltered.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        </div>
      ) : (
        <p className="lead text-center p-1">
          Nenhum livro disponível, por favor, pesquise !!
        </p>
      )}
    </section>
  );
};

export default Books;
