import React from 'react';

const Head = ({ title, desc }: { title: string; desc: string }) => {
  React.useEffect(() => {
    document.title = `Plan XP | ${title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', desc || '');
  }, [title, desc]);
  return <></>;
};

export default Head;
