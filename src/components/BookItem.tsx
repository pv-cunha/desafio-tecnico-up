import React from 'react';
import styles from '../styles/components/BookItem.module.css';
import closeImg from '../assets/close.svg';
import Button from './layout/Button';
import { Link } from 'react-router-dom';
import { useBook } from '../context/BookContext';

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
  const [modalDescription, setModalDescription] = React.useState(false);

  const { favorites, setFavorites } = useBook();

  const onClick = () => {
    setModalDescription(!modalDescription);
  };

  const handleFavorite = (book: Volume) => {
    setFavorites([...favorites, book]);
  };

  return (
    <div className={styles.card}>
      <div>
        {modalDescription && (
          <>
            <p className={styles.description}>
              <strong>Descrição:</strong> {book.volumeInfo.description}
            </p>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setModalDescription(!modalDescription)}
            >
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
        <Button onClick={onClick}>Descrição</Button>
        <strong>Data de publicação: {book.volumeInfo.publishedDate}</strong>
      </p>
      <button
        type="button"
        className={styles.btn}
        onClick={() => handleFavorite(book)}
      >
        Favoritar
      </button>
    </div>
  );
};

export default BookItem;
