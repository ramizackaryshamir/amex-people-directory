import React from 'react';
import Image from 'next/image';
import { formatDate } from '../lib/utis';

const Person = ({ image, imgWidth, imgHeight, id, first, last, age, streetName, streetNumber, city, state, country, postcode, email, phone, dob }: any) => {

  return (
    <article style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: 'fit-content',
      height: 'fit-content',
    }} key={`${id}`}>
      <header>
        <Image
          src={image}
          alt={`Profile picture for ${first} ${last} from ${city}. ${first} is ${age} years old.`}
          priority
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
        <section style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ color: '#9BD4F5' }}>{streetNumber} {streetName}</div>
          <div style={{ color: '#9BD4F5' }}>{city}, {state} {postcode}</div>
          <div style={{ color: '#9BD4F5' }}>{country}</div>
        </section>
        :
        <section>{city}</section>}

      <footer style={{ margin: '10px 0px' }}>
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