import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from '../LandingPage/Components/Footer/Footer';
import CopyrightFooter from '../LandingPage/Components/CopyrightFooter/CopyrightFooter';
import styles from './FacebookBusinessPage.module.css';

const FacebookBusinessPage: React.FC = () => {
  return (
    <div className={styles.facebookBusinessPage}>
      <Header />
      <MainContent />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default FacebookBusinessPage;