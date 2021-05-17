import React from 'react';
import styles from '../styles/pages/Dashboard.module.css';
import { api } from '../services/api';
import Searchbar from '../components/Searchbar';
import BookItem from '../components/BookItem';
import Button from '../components/layout/Button';
import { maxResults } from '../utils/Pagination';
import Loading from '../components/layout/Loading';

interface ImagesLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface Volumes {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    infoLink: string;
    publishedDate: string;
    imageLinks?: ImagesLinks;
  };
}

const Books: React.FC = () => {
  const [inputText, setInputText] = React.useState('');
  const [books, setBooks] = React.useState<Volumes[]>([]);
  const [pages, setPages] = React.useState<number>(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    handleSubmit();

    // eslint-disable-next-line
  }, [pages]);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await api
        .getVolumes(inputText, pages)
        .then((res) => setBooks(res.data.items));
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

  const backPage = () => {
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
        inputText={inputText}
        handleChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {loading && <Loading />}

      {books && books.length !== 0 ? (
        <div className={styles.container}>
          <div className={styles.btnPages}>
            <Button onClick={backPage}>Voltar</Button>
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
