import React from 'react';
import Link from 'next/link';
import Person from './components/Person';
import { api } from './lib/api';
import { PersonResponseObject } from './types';

const DirectoryPage = async () => {

  const { results } = await api.getRandomUsers();

  return (
    <>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100vw',
      }}>
        <article style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: '5px',
          gridRowGap: '2px',
          placeItems: 'center',
        }} >
          {
            results.map((person: PersonResponseObject) => {
              return (
                <section key={person.login.uuid}>
                  <Link href={`/${person.login.uuid}`}>
                    <Person
                      uuid={person.login.uuid}
                      first={person.name.first}
                      last={person.name.last}
                      age={person.dob.age}
                      city={person.location.city}
                      large={person.picture.large}
                      imgWidth={180}
                      imgHeight={180}
                    />
                  </Link >
                </section>
              );
            })
          }
        </article>
      </main >

    </>
  );
};

export default DirectoryPage;