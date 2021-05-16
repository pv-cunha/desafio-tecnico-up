import React from 'react';

const useMedia = (media: string) => {
  const [isMatched, setIsMatched] = React.useState<boolean>();

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setIsMatched(matches);
    };
    changeMatch();

    window.addEventListener('resize', changeMatch);

    return () => window.removeEventListener('resize', changeMatch);
  }, [media]);

  return isMatched;
};

export default useMedia;
