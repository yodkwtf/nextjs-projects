import React from 'react';
import styles from '../../styles/Members.module.css';
import Head from 'next/head';
import Link from 'next/link';

// this runs at build time
// runs before the component is rendered in the browser, fetches the data and fills the component with that data
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      members: data,
    },
  };
};

const Team = ({ members }) => {
  return (
    <>
      <Head>
        <title>TeamList | Members</title>
        <meta name="keywords" content="team of yodkwtf" />
      </Head>
      <div>
        <h1>All Team Members</h1>
        {members.map((member) => (
          <Link key={member.id} href={`/members/${member.id}`}>
            <a className={styles.single}>
              <h3>{member.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Team;
