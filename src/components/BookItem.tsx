import React from 'react';
import styles from '../styles/components/BookItem.module.css';
import closeImg from '../assets/close.svg';

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

  return (
    <div className={styles.card}>
      <div>
        {modalDescription ? (
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
        ) : (
          <img
            className={styles.img}
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
        )}
      </div>
      <h2>{book.volumeInfo.title}</h2>
      <button
        type="button"
        className={styles.btnDescription}
        onClick={() => setModalDescription(!modalDescription)}
      >
        Descrição
      </button>
      <p className={styles.date}>
        <strong>Data de publicação: {book.volumeInfo.publishedDate}</strong>
      </p>
    </div>
  );
};

export default BookItem;
