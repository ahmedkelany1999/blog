import { memo } from "react";
import { Link } from "react-router-dom";




const ArticleCard = memo(function ArticleCard({ article }) {
  return (
    <Link to = {`/Blog/${article.id}`} className="block" aria-label={article.title}>
      <article className="relative mt-10  mr-2 bg-white rounded-lg border shadow-sm hover:shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={article.thumbnail}
            alt={article.title}
            loading="lazy"
            className="w-full h-40 object-cover"
          />
          <span className="text-[#768efc] bg-rgb(228 228 228) text-xs font-semibold px-2 py-1 rounded">
            {article.category}
          </span>
        </div>

        <div className="p-4">
          <h3 className=" text-sm font-semibold text-gray-800 mb-6 leading-tight">
            {article.title}
          </h3>

          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              loading="lazy"
              className="w-7 h-7 rounded-full flex-shrink-0"
            />
            <div className="text-xs text-gray-500">
              <div>{article.author.name}</div>
              <div className="text-[11px]">{article.date}</div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
});

export default ArticleCard;