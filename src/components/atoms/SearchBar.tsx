import { FaSearch } from "react-icons/fa";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  query: string;
  setQuery: (val: string) => void;
  handleSearch?: () => void;
}

function SearchBar({
  query,
  setQuery,
  handleSearch,
  className,
  ...props
}: IProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (handleSearch && e.key === "Enter") handleSearch();
  };

  return (
    <div
      className={[
        "flex justify-between overflow-hidden bg-white rounded-full",
        className,
      ].join(" ")}
      {...props}
    >
      <input
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        value={query}
        className="p-2 flex-1 rounded-l-full"
        placeholder="Rechercher un artisan..."
        type="text"
      />

      <button onClick={handleSearch} className="px-3">
        <FaSearch size={20} className="text-secondary mx-auto" />
      </button>
    </div>
  );
}

export default SearchBar;
