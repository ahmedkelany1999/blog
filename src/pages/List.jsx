import BlogList from "../components/BlogList";
import EmptySearch from "../components/EmptySearch";
import ShowMessage from "../components/ShowMessage";
import Header from "../components/Header";
import { useFetchData } from "../useFetchData";

const List = () => {
 
  const {
    result: blogsList,
    filteredBlogs,
    setFilteredBlogs,
    isLoading,
    isError,
  } = useFetchData();

  return (
    <>
      <Header blogsList={blogsList} setFilteredBlogsList={setFilteredBlogs} />

      {isError && <ShowMessage message="Something went wrong" />}
      {isLoading && <ShowMessage message="Loading..." />}

      {!isLoading && !isError && filteredBlogs.length === 0 && (
        <EmptySearch message="No results found" />
      )}

      {!isLoading && !isError && filteredBlogs.length > 0 && (
        <BlogList data={filteredBlogs} />
      )}
    </>
  );
};

export default List;
