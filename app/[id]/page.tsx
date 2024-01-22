import React from 'react';
import Person from '../components/Person';
import { api } from '@/app/lib/api';
import { PersonResponseObject, Params } from '../types';
import styles from './page.module.css';

const PersonDetailsPage = async ({ params: { id } }: Params) => {

  const persons = await api.getRandomUsers();

  return (
    <>
      {persons.results
        .filter(((person: PersonResponseObject) => id === person.login.uuid))
        .map((person: any) => {
          return (
            <>
              <article className={styles.pageContainer} key={person.login.uuid} >
                <Person
                  large={person.picture.large}
                  imgHeight={360}
                  imgWidth={360}
                  uuid={person.login.uuid}
                  first={person.name.first}
                  last={person.name.last}
                  age={person.dob.age}
                  city={person.location.city}
                  streetName={person.location.street.name}
                  streetNumber={person.location.street.number}
                  state={person.location.state}
                  country={person.location.country}
                  postcode={person.location.postcode}
                  email={person.email}
                  phone={person.phone}
                  dob={person.dob.date}
                />
              </article >
            </>
          );
        })}
    </>
  );
};

export default PersonDetailsPage;