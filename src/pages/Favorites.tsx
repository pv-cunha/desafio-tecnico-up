import React from 'react';
import styles from '../styles/pages/Favorites.module.css';
import { useBook } from '../context/BookContext';
import FavoriteBookItem from '../components/FavoriteBookItem';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const { favorites } = useBook();
  return (
    <section className="container animeLeft">
      <div className={styles.bookHeader}>
        <h1 className="title">Livros Favoritos</h1>
        <Link className={styles.link} to="/books">
          Voltar
        </Link>
      </div>
      {favorites && favorites.length !== 0 ? (
        <div className={styles.container}>
          <div className={styles.books}>
            {favorites.map((favorite) => (
              <FavoriteBookItem key={favorite.id} favorite={favorite} />
            ))}
          </div>
        </div>
      ) : (
        <p className="lead text-center p-1">
          Adicione livros como seus favoritos !!
        </p>
      )}
    </section>
  );
};

export default Favorites;
