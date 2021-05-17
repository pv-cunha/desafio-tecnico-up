import React from 'react';
import styles from '../styles/components/BookItem.module.css';
import closeImg from '../assets/close.svg';
import Button from './layout/Button';
import { Link } from 'react-router-dom';
import { useBook } from '../context/BookContext';
import { useAlert } from '../context/AlertContext';

interface ImagesLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface Volume {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    infoLink: string;
    publishedDate: string;
    imageLinks?: ImagesLinks;
  };
}

interface BookPros {
  book: Volume;
}

const BookItem: React.FC<BookPros> = ({ book }) => {
  const [coverDescription, setCoverDescription] = React.useState(false);

  const { addFavorite } = useBook();
  const { setAlert } = useAlert();

  const onCover = () => {
    setCoverDescription(!coverDescription);
  };

  const setFavorite = () => {
    addFavorite(book);

    setAlert({ description: 'Livro favoritado !' });
  };

  return (
    <div className={styles.card}>
      <div>
        {coverDescription && (
          <>
            <p className={styles.description}>
              <strong>Descrição:</strong> {book.volumeInfo.description}
            </p>
            <button type="button" className={styles.closeBtn} onClick={onCover}>
              <img src={closeImg} alt="Close" />
            </button>
          </>
        )}
      </div>
      <Link to={`/books/${book.id}`}>
        <img
          className={styles.img}
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
      </Link>
      <h2>{book.volumeInfo.title}</h2>

      <p className={styles.date}>
        <Button onClick={onCover}>Descrição</Button>
        <strong>Data de publicação: {book.volumeInfo.publishedDate}</strong>
      </p>
      <button type="button" className={styles.btn} onClick={setFavorite}>
        Favoritar
      </button>
    </div>
  );
};

export default BookItem;
