import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header.js';
import SectionsContainer from '../SectionsContainer/SectionsContainer.js';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <SectionsContainer />
    </div>
  );
}

export default App;
