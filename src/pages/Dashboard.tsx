import React from 'react';
import styles from '../styles/pages/Dashboard.module.css';
import { api } from '../services/api';
import Searchbar from '../components/Searchbar';

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
    imageLinks: ImagesLinks;
  };
}

const Dashboard: React.FC = () => {
  const [inputText, setInputText] = React.useState('');
  const [books, setBooks] = React.useState<Volumes[]>([]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await api.getVolumes(inputText).then((res) => setBooks(res.data.items));
  };

  return (
    <section className={`container animeLeft`}>
      <Searchbar
        inputText={inputText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default Dashboard;
