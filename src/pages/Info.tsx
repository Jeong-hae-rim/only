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
      <div className="notice__container">
        <h3 className="title">NOTICE</h3>
        <div className="notice__1">
          <p className="notice__title">
            모든 부스 내 선입금이 이미 진행된 품목은 <br />
            <span>당일 현장에 수량이 적거나 없을 수</span> 있습니다.
          </p>
          <p className="notice__title">
            꼭 작가님에게 여쭤보고 구매를 진행해 주세요.
          </p>
        </div>
        <div className="notice__2">
          <p className="notice__title">
            8월 10일 온리전 당일은 <br /> 옆 홀에서{" "}
            <span>정기 시험이 진행</span> 중입니다.
          </p>
          <p className="notice__title">
            정숙한 자세로 현판 사냥을 하는 <br /> 멋진 호댐러의 모습을
            보여줍시다.
          </p>
        </div>
      </div>
      <Card infoData={filteredData} />
    </div>
  );
}

export default Info;
