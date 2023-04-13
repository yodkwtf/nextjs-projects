import styles from '../styles/Articles.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <ArticleItem key={post.id} article={post} />
      ))}
    </div>
  );
};
export default ArticleList;
