import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem"
import react from "react";

function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((art) => (
          <react.Fragment key={art.id}>
            <ArticleItem article={art} />
          </react.Fragment>
      ))}
    </div>
  );
}

export default ArticleList;
