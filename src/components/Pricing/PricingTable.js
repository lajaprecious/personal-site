import React from 'react';
import '../../static/css/pricing/pricing.css';
import Free from './Free';
import Plus from './Plus';
import Pro from './Pro';

const App = () => {
  const styles = {
    display: 'flex',
    gap: '3rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#e4e7e8',

  };
  return (
    <div style={styles}>
      <Free />
      <Plus />
      <Pro />

    </div>
  );
};

export default App;
