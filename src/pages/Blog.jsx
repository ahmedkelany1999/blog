import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../useFetchData";
import ShowMessage from "../components/ShowMessage";

const Blog = () => {
  const { id } = useParams();
  const { result: blog, isLoading, isError } = useFetchData(id);

  if (isError) return <ShowMessage message="Something went wrong!" />;
  if (isLoading) return <ShowMessage message="Loading blog data..." />;
  if (!blog) return <ShowMessage message="Blog not found!" />;

  return (
    <div className="p-6">
      <Link
        className="mb-6 inline-block rounded-md bg-white p-3 shadow hover:bg-gray-50 transition"
        to="/"
      >
        ← Back
      </Link>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        
        <div className="flex flex-col space-y-6">
          <div className="w-full aspect-[16/9]">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full rounded-lg shadow-md object-cover"
          />
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            {blog.title}
          </h1>
        </div>

        <div className="flex flex-col space-y-6">
  
          <div className="flex items-center gap-3">
            <img
              src={blog.author?.avatar || "https://i.pravatar.cc/40?img=1"}
              alt={blog.author?.name || "Unknown Author"}
              className="w-12 h-12 rounded-full object-cover shadow"
            />
            <div>
              <p className="font-semibold text-gray-800">
                {blog.author?.name || "Unknown Author"}
              </p>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
          </div>

          <p className="text-sm font-medium text-indigo-600">
             {blog.category}
          </p>

          <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>

          <div className="prose max-w-none text-gray-800">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
