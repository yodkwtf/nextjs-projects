import ArticleList from '../components/ArticleList';
import styles from '../styles/Layout.module.css';
import { serverUrl } from '../config';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <ArticleList posts={posts} />
    </div>
  );
}

// FETCHING FROM AN EXTERNAL API
// export const getStaticProps = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=6'
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// FETCHING FROM A LOCAL API
export const getStaticProps = async () => {
  const res = await fetch(`${serverUrl}/api/articles`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
