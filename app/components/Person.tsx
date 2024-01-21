import React from 'react';
import Image from 'next/image';
import styles from './person.module.css';

const Person = ({ image, id, first, last, age, street, number, city, state, country, postcode, email, phone, dob }: any) => {

  return (


    <article className={styles.personContainer} key={`${id}`}>
      <header className={styles.header}>
        <div>{first} {last}, {age}</div>

      </header>
      <section>
        <Image src={image} alt={`Profile picture for ${first} ${last} from ${city}. ${first} is ${age} years old.`}
          width={400}
          height={300}
          style={{
            objectFit: "cover",
            borderRadius: '5%',
            mixBlendMode: 'exclusion',
            padding: '0px 5px 0px 5px'
          }} />
      </section>


      <footer className={styles.footer}>
        {street && number ? <div>{number} {street} <br />{city}, {state} {postcode} <br /> {country} </div> : <div>City: {city}</div>}

        {email ? <div>Email: {email}</div> : null}

        {dob ? <div>DOB: {dob}</div> : null}

        {phone ? <div>Phone #:{phone}</div> : null}
      </footer>
    </article >

  );
};
export default Person;