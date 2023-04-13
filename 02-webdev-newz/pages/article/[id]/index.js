import { useRouter } from 'next/router';
import Link from 'next/link';
import { serverUrl } from '../../../config';
import Meta from '../../../components/Meta';

const article = ({ article }) => {
  //- alternative way to get the router instance
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// FETCHING DATA AT EVERY REQUEST
// export const getServerSideProps = async (context) => {
//   // context gives access to the query params
//   const { id } = context.query;

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// FETCHING DATA ONLY ONCE & CREATING DYNAMIC PAGES
// export const getStaticProps = async (context) => {
//   // context gives access to the query params
//   const { id } = context.params;

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     // this is what we need here
//     // paths: { params: {id: '1', id: '2', id: '3'} },
//     paths,
//     fallback: false,
//   };
// };

// FETCHING DATA FROM OUR API

export const getStaticProps = async (context) => {
  // context gives access to the query params
  const { id } = context.params;

  const res = await fetch(`${serverUrl}/api/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${serverUrl}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    // this is what we need here
    // paths: { params: {id: '1', id: '2', id: '3'} },
    paths,
    fallback: false,
  };
};

export default article;
