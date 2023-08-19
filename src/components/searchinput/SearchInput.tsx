import { HeaderProps } from "../../types/search.types";
import "./searchinput.css";

function SearchInput({ searchquery, handleSearchChange }: HeaderProps) {
  return (
    <div className="searchinput_wrapper">
      <div className="search_icon_wrapper">
        <i className="fa fa-search"></i>
      </div>
      <input
        type="text"
        placeholder="Search.."
        value={searchquery}
        onChange={handleSearchChange}
        className="search_input"
      />
    </div>
  );
}

export default SearchInput;
