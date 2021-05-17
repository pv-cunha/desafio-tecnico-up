import React from 'react';
import styles from '../styles/pages/SingleBook.module.css';
import { useParams } from 'react-router';
import { api } from '../services/api';
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
    <section className="container animeLeft">
      <div className={styles.bookHeader}>
        <h1 className="title">{book.title}</h1>
        <Link className={styles.link} to="/books">
          Voltar
        </Link>
      </div>

      <div className={styles.bookContent}>
        <img src={book.imageLinks?.thumbnail} alt={book.title} />
        <div>
          <ul>
            <li>
              <p>
                <strong>Autor:</strong> {book.authors};
              </p>
            </li>
            <li>
              <p>
                <strong>Idioma:</strong> {book.language};
              </p>
            </li>
            <li>
              <p>
                <strong>Categorias:</strong> {book.categories};
              </p>
            </li>
            <li>
              <p>
                <strong>Publicado em:</strong> {book.publishedDate};
              </p>
            </li>
            <li>
              <p>
                <strong>Para comprar, clique no link: </strong>{' '}
                <a className={styles.previewLink} href={book.previewLink}>
                  {book.title}
                </a>
                ;
              </p>
            </li>
            <li>
              <p>
                <strong>Descrição: </strong> {book.description}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
