import "./info.css";
import { useState } from "react";
import { data } from "../data/data";
import Card from "../components/Card";
import SearchInput from "../components/Search";

function Info() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="info__container">
      <h1 className="title">LOVE PUNCH</h1>
      <h2 className="title">통합 부스 & 인포</h2>
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <Card infoData={filteredData} />
    </div>
  );
}

export default Info;
