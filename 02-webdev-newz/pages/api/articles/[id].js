import { articles } from '../../../data';

export default (req, res) => {
  const id = req.query.id;
  const article = articles.find((article) => article.id === id);

  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: `Article with id ${id} not found` });
  }
};
