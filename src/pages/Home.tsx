import React from 'react';
import styles from '../styles/pages/Home.module.css';
import { Link } from 'react-router-dom';
import notebookImg from '../assets/notebook.svg';

const Home: React.FC = () => {
  return (
    <section className="p-3 mainContainer animeLeft">
      <div className={styles.container}>
        <div>
          <img src={notebookImg} alt="Notebook" />
        </div>
        <div>
          <h1 className="x-large text-center">Biblioteca Virtual</h1>
          <p className="text-center lead">
            Sistema para buscar livros disponíveis no Google Books.
          </p>
          <p className="text-center lead">
            Ir para{' '}
            <Link to="/books">
              <i className="far fa-hand-point-right"></i> Biblioteca
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
