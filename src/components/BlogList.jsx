import ArticleCard from "./ArticleCard";
import EmptySearch from "./EmptySearch";
const BlogList = ({ data }) => {
  


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {Array.isArray(data) && data.length  ?  data.map((post) => (
        <ArticleCard
          key={post.id}
          article={post}
          title={post.title}
          category={post.category}
          thumbnail={post.thumbnail}
          author={post.author?.name || "Unknown"}
          date={post.date}
        />
      )): (<EmptySearch/>)}
    </div>
  );
};

export default BlogList;