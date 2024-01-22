import React from 'react';
import Person from '../components/Person';
import { api } from '@/app/lib/api';
import styles from './page.module.css';


const PersonDetailsPage = async ({ params: { id } }: any) => {

  const persons = await api.getRandomUsers();

  return (
    <>
      {persons.results
        .filter(((person: any) => id === person.login.uuid))
        .map((person: any) => {
          return (
            <>
              <article className={styles.pageContainer} key={person.login.uuid} >
                <Person
                  id={person.login.uuid}
                  first={person.name.first}
                  last={person.name.last}
                  age={person.dob.age}
                  streetNumber={person.location.street.number}
                  streetName={person.location.street.name}
                  city={person.location.city}
                  state={person.location.state}
                  postcode={person.location.postcode}
                  country={person.location.country}
                  email={person.email}
                  phone={person.phone}
                  dob={person.dob.date}
                  image={person.picture.large}
                  imgHeight={360}
                  imgWidth={360}
                />
              </article >
            </>
          );
        })}
    </>
  );
};

export default PersonDetailsPage;