import React from 'react';
import styles from '../styles/components/FavoriteBookItem.module.css';
import { Link } from 'react-router-dom';
import Button from './layout/Button';
import closeImg from '../assets/close.svg';
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
  favorite: Volume;
}

const FavoriteBookItem: React.FC<BookPros> = ({ favorite }) => {
  const [coverDescription, setCoverDescription] = React.useState(false);

  const { removeFavorite } = useBook();
  const { setAlert } = useAlert();

  const onCover = () => {
    setCoverDescription(!coverDescription);
  };

  const noFavorite = () => {
    removeFavorite(favorite.id);

    setAlert({ description: 'Livro retirado dos favoritos !' });
  };

  return (
    <div className={styles.card}>
      <div>
        {coverDescription && (
          <>
            <p className={styles.description}>
              <strong>Descrição:</strong> {favorite.volumeInfo.description}
            </p>
            <button type="button" className={styles.closeBtn} onClick={onCover}>
              <img src={closeImg} alt="Close" />
            </button>
          </>
        )}
      </div>
      <Link to={`/books/${favorite.id}`}>
        <img
          className={styles.img}
          src={favorite.volumeInfo.imageLinks?.thumbnail}
          alt={favorite.volumeInfo.title}
        />
      </Link>
      <h2>{favorite.volumeInfo.title}</h2>

      <p className={styles.date}>
        <Button onClick={onCover}>Descrição</Button>
        <strong>Data de publicação: {favorite.volumeInfo.publishedDate}</strong>
      </p>
      <button type="button" className={styles.btn} onClick={noFavorite}>
        Remover dos favoritos
      </button>
    </div>
  );
};

export default FavoriteBookItem;
