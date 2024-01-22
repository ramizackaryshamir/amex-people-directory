import React from 'react';
import Image from 'next/image';
import { formatDate } from '../lib/utis';
import styles from './person.module.css';

const Person = ({ image, imgWidth, imgHeight, id, first, last, age, streetName, streetNumber, city, state, country, postcode, email, phone, dob }: any) => {

  return (
    <article className={styles.personContainer} key={`${id}`}>
      <header className={styles.header}>
        <Image src={image} alt={`Profile picture for ${first} ${last} from ${city}. ${first} is ${age} years old.`}
          height={imgHeight}
          width={imgWidth}
          style={{
            objectFit: "cover",
            borderRadius: '5%',
            mixBlendMode: 'exclusion',
          }} />
        <section style={{ margin: '5px 0 0 0' }}>
          {first} {last}, {age}
        </section>
      </header>

      {streetNumber || streetName ?
        <section className={styles.address}>
          <div>{streetNumber} {streetName}</div>
          <div>{city}, {state} {postcode}</div>
          <div>{country}</div>
        </section>
        :
        <section>{city}</section>}
      <footer className={styles.footer}>
        {email ?
          <section>e: {email}</section>
          :
          null}
        {phone
          ? <section>p: {phone}</section>
          :
          null}
        {dob ?
          <section style={{ color: '#9BD4F5' }}>birthday: {formatDate(dob)}</section>
          :
          null}

      </footer>

    </article >
  );
};
export default Person;