import React from 'react';

interface ImagesLinks {
  smallThumbnail: string;
  thumbnail: string;
}

type Volume = {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    infoLink: string;
    publishedDate: string;
    imageLinks?: ImagesLinks;
  };
};

interface BookContextData {
  books: Volume[];
  setBooks: React.Dispatch<React.SetStateAction<Volume[]>>;
  favorites: Volume[];
  setFavorites: React.Dispatch<React.SetStateAction<Volume[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  pages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

const BookContext = React.createContext<BookContextData>({} as BookContextData);

const useBook = () => {
  const context = React.useContext(BookContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider !');
  }

  return context;
};

const BookProvider: React.FC = ({ children }) => {
  const [books, setBooks] = React.useState<Volume[]>([]);
  const [favorites, setFavorites] = React.useState<Volume[]>([]);
  const [text, setText] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [pages, setPages] = React.useState<number>(0);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        favorites,
        setFavorites,
        loading,
        setLoading,
        text,
        setText,
        pages,
        setPages,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookProvider, useBook };
