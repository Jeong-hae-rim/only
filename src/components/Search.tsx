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
      <div className="search-8bit">
        <div className="search-wrapper">
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="부스 명 / 작가님 이름 / 부스 위치로 검색"
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
