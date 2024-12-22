import React from 'react';
import styles from './AccountVerification.module.css';
import Image from 'next/image';
import Link from 'next/link';

const AccountVerification = () => {
  return (
    <main className={styles.container}>
      <section className={styles.card} aria-labelledby="verification-status">
      <Image
          src="/Frame 204.svg"
          alt="Verification success icon"
          className={styles.icon}
          width={60} 
          height={60}
        />
        <h1 id="verification-status" className={styles.status}>
          Account Verified
        </h1>
        <p className={styles.message}>
          You have successfully confirmed your account with the email.{' '}
          <span className={styles.email}>asdasdasd@gmail.com</span>You can now use this email to log in.
        </p>
        <Link href="/Login">
          <button className={styles.button}>
            Confirm
          </button>
        </Link>
      </section>
    </main>
  );
};

export default AccountVerification;
