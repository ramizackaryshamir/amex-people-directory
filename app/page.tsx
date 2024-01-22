import React from 'react';
import Link from 'next/link';
import Person from './components/Person';
import { api } from './lib/api';
import styles from './page.module.css';

const DirectoryPage = async () => {

  const { results, seed } = await api.getRandomUsers();

  return (
    <>
      <main className={styles.pageContainer}>
        <article className={styles.directoryGrid}>
          {results.map((person: any) => {
            return (
              <section key={person.login.uuid}>
                <Link href={`/${person.login.uuid}`}>
                  <Person
                    id={person.login.uuid}
                    first={person.name.first}
                    last={person.name.last}
                    age={person.dob.age}
                    city={person.location.city}
                    image={person.picture.large}
                    imgWidth={180}
                    imgHeight={180}
                  />
                </Link >
              </section>
            );
          })}
        </article>
      </main>

    </>
  );
};

export default DirectoryPage;