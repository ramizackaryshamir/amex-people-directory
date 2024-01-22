import React from 'react';
import Image from 'next/image';
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
            padding: '0px 5px 0px 5px'
          }} />
        <section>
          {first} {last}, {age}
        </section>
      </header>



      <footer className={styles.footer}>
        {streetNumber || streetName ?
          <section className={styles.address}>
            <div>{streetNumber} {streetName}</div>
            <div>{city}, {state} {postcode}</div>
            <div>{country}</div>
          </section>
          :
          <section>{city}</section>}
        {email ?
          <section>Email: {email}</section>
          :
          null}
        {dob ?
          <section>DOB: {dob}</section>
          :
          null}
        {phone
          ? <section>Phone #:{phone}</section>
          :
          null}
      </footer>

    </article >
  );
};
export default Person;