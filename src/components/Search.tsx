import "./search.css";

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="부스 명 / 작가님 이름 / 부스 위치로 검색 해보세요!"
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
