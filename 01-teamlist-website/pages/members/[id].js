import React from 'react';
import Head from 'next/head';

// this function also runs at build time
// tells next.js what are the possible values for the route params and what are the dynamic pages that need to be created
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    // paths will be an array of objects, each object will have a params object with properties that uniquely identify the page
    // paths: [{params: {id: 1}}, {params: {id: 2}}]
    paths: paths,
    fallback: false,
  };
};

// if we return 10 objects with 10 diff paths in the func above, it will run the below func 10 times for 10 diff pages
export const getStaticProps = async (context) => {
  // `context` has access to unique identifier for the page (id in our case)
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { member: data },
  };
};

const MemberDetails = ({ member }) => {
  return (
    <>
      <Head>
        <title>TeamList | {member.name}</title>
      </Head>
      <div>
        <h1>{member.name}</h1>
        <p>{member.email}</p>
        <p>{member.website}</p>
        <p>{member.address.city}</p>
      </div>
    </>
  );
};

export default MemberDetails;
