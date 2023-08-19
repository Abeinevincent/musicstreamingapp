export interface HeaderProps {
  searchquery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
