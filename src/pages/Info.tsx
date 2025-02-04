import "./info.css";
import { useState } from "react";
import { data } from "../data/data";
import Card from "../components/Card";
import SearchInput from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Finding from "../components/Finding";

function Info() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const authorString = Array.isArray(item.author)
      ? item.author.join(", ")
      : item.author; // 기존 string 데이터도 처리 가능하도록

    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      authorString.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="info__container">
      <Header />
      <div className="test-wrapper">
        <div className="info__wrapper">
          <div className="info__wrap">
            <div className="info__contents">
              <h1 className="title2">
                {" "}
                <span className="dela-gothic-one-regular">ツッパリ</span> HIGH
                SCHOOL
              </h1>
              <h1 className="title2">⊹⁺ LOVE & BALL ⊹⁺</h1>
              <br />
              <h2 className="title3">부스 리스트</h2>
              <SearchInput
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />
              {/* <div className="notice__container">
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
      </div> */}
              {filteredData.length !== 0 ? (
                <Card infoData={filteredData} />
              ) : (
                <Finding />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
