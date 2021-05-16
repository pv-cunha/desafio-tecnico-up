import React from 'react';
import styles from '../styles/components/SingleBook.module.css';
import { useParams } from 'react-router';
import { api } from '../services/api';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

interface ImageLink {
  thumbnail?: string;
}

interface BookInfo {
  title: string;
  description: string;
  previewLink: string;
  publishedDate: string;
  language: string;
  imageLinks?: ImageLink;
  categories: [];
  authors: [];
}

const SingleBook: React.FC = () => {
  const { id } = useParams();

  const [book, setBook] = React.useState<BookInfo>({} as BookInfo);

  React.useEffect(() => {
    api.getBookById(id).then((res) => setBook(res.data.volumeInfo));
  }, [id]);

  return (
    <section className="container">
      <div className={styles.bookHeader}>
        <h1 className="title">{book.title}</h1>
        <Link className={styles.link} to="/books">
          Voltar
        </Link>
      </div>

      <div className={styles.bookContent}>
        <img src={book.imageLinks?.thumbnail} alt={book.title} />
        <div>
          <p>
            <strong>Autor:</strong> {book.authors};
          </p>
          <p>
            <strong>Idioma:</strong> {book.language};
          </p>
          <p>
            <strong>Categorias:</strong> {book.categories};
          </p>
          <p>
            <strong>Publicado em:</strong> {book.publishedDate};
          </p>
          <p>
            <strong>Para comprar, clique no link: </strong>{' '}
            <a className={styles.previewLink} href={book.previewLink}>
              {book.title}
            </a>
            ;
          </p>
          <p>
            <strong>Descrição: </strong> {book.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
