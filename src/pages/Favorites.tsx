import React from 'react';
import { useBook } from '../context/BookContext';

const Favorites: React.FC = () => {
  const { favorites } = useBook();
  return (
    <section className="animeLeft">
      {favorites.length === 0 && (
        <p className="lead text-center p-1">
          Adicione um livro como favorito !!
        </p>
      )}
    </section>
  );
};

export default Favorites;
