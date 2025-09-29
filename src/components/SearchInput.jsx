import { useState, useEffect, useMemo, useCallback } from "react";

const SearchInput = ({ blogsList, filteredBlogsList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredBlogs = useMemo(() => {
    const cleanedValue = searchTerm.trim().toLowerCase();
    if (!cleanedValue) return blogsList;

    return blogsList.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const category = post.category?.toLowerCase() || "";
      const author = post.author?.name?.toLowerCase() || "";
      return (
        title.includes(cleanedValue) ||
        category.includes(cleanedValue) ||
        author.includes(cleanedValue)
      );
    });
  }, [searchTerm, blogsList]);


  useEffect(() => {
    filteredBlogsList(filteredBlogs);
  }, [filteredBlogs, filteredBlogsList]);


  const handleClear = useCallback(() => {
    setSearchTerm("");
    filteredBlogsList(blogsList);
  }, [blogsList, filteredBlogsList]);

 
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        filteredBlogsList(filteredBlogs);
      } else if (e.key === "Escape") {
        handleClear();
      }
    },
    [filteredBlogs, filteredBlogsList, handleClear]
  );

  return (
    <div
      className="relative flex items-center bg-gradient-to-r from-gray-50 to-gray-100 
                 rounded-lg shadow-md border border-gray-200
                 hover:shadow-lg hover:border-blue-300 
                 focus-within:shadow-lg focus-within:border-blue-400 focus-within:bg-white
                 transition-all duration-300 ease-in-out
                 w-full h-9 px-2 py-1
                 xs:w-36 xs:h-10 xs:px-2.5 xs:py-1.5
                 sm:w-44 sm:h-11 sm:px-3 sm:py-2
                 md:w-60 md:h-10 md:px-3 md:py-1.5
                 lg:w-80 lg:h-11 lg:px-4 lg:py-2"
    >

      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400 
                   text-xs leading-tight
                   xs:text-sm sm:text-sm md:text-sm lg:text-base
                   min-w-0 w-full
                   placeholder:transition-colors placeholder:duration-200
                   focus:placeholder-gray-300"
      />

 
      <button
        type="button"
        aria-label={searchTerm ? "Clear search" : "Search"}
        onClick={searchTerm ? handleClear : () => filteredBlogsList(filteredBlogs)}
        className={`group flex items-center justify-center
                   w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8
                   rounded-full transition-all duration-200 ease-in-out
                   focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1
                   ${searchTerm ? "hover:bg-red-100 active:bg-red-200" : "hover:bg-blue-100 active:bg-blue-200"}`}
      >
        {searchTerm ? (

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-3.5 h-3.5 xs:w-4 xs:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5
                       text-gray-500 group-hover:text-red-600 group-active:text-red-700
                       transform group-hover:scale-110 group-active:scale-95 transition-all"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
     
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-3.5 h-3.5 xs:w-4 xs:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5
                       text-gray-500 group-hover:text-blue-600 group-active:text-blue-700
                       transform group-hover:scale-110 group-active:scale-95 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 0110.15 13.65z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SearchInput;
