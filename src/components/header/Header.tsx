import { HeaderProps } from "../../types/search.types";
import SearchInput from "../searchinput/SearchInput";

function Header({
  searchquery,
  setSearchQuery,
  handleSearchChange,
}: HeaderProps) {
  return (
    <div className="search_wrapper">
      <h2 style={{ color: "white" }}>React Music Streaming App</h2>
      <SearchInput
        searchquery={searchquery}
        setSearchQuery={setSearchQuery}
        handleSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default Header;
