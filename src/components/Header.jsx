import Home from "../pages/Home";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Header = ({ blogsList, setFilteredBlogsList }) => {
  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-md bg-white">
      <Logo />
      <Home />
      <SearchInput
        blogsList={blogsList}
        filteredBlogsList={setFilteredBlogsList}
      />
    </header>
  );
};

export default Header;
