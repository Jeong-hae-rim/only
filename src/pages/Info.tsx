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
      {/* <h2 className="title">통합 부스 & 인포</h2> */}
      {/* <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      /> */}
      <div className="notice__container">
        <h3 className="title">LETTER</h3>
        <div className="notice__1">
          <p className="notice__title">
            안녕하세요, <br />
            호열X대만 온리전 「LOVE PUNCH」 에 참여해주신 <br />
            부스러 및 참관객 여러분
          </p>
          <p className="notice__title">
            온리전은 즐거우셨을까요? <br />
            저 또한 최고로 애정하는 CP의 첫 온리전이 열린 것이 <br />
            너무나도 즐거웠습니다. <br />
            <br />
            최고로 즐겼는지는 모르겠습니다만, <br />
            그래도 즐거웠습니다.
            <br />
          </p>
          <p className="notice__title">
            이 편지를 남긴 이유는 다름이 아니오라, <br />
            해당 웹페이지는 8월 10일 온리전이 끝난 기점으로 <br />
            모든 부스 컷 및 상세 인포 페이지를 <br />
            전부 내린다는 말씀을 드리기 위함입니다.
          </p>
          <p className="notice__title">
            이 웹앱은 온리전에 참여하시는 분들 모두 <br />
            선입금 및 현장 판매나 나눔 품목이 어디에 위치하는지 <br />
            일일히 X에 들어가지 않더라도 확인하실 수 있도록 <br />
            쾌적하게 즐기셨으면 하는 바람으로 만들어졌습니다. <br />
            <br />
            또한 이 웹앱이 여러분들의 호의를 얻을 수 있었던 까닭은 <br />
            여러분께서 이해해주시고 관용을 베풀어주셨기에 <br />
            가능했다고 생각합니다. <br />
            <br />
            그러나 제 목적이 사익이 아니라 하더라도 <br />
            제가 부스러 분들의 부스컷 및 최종 인포를 <br />
            허락을 구하지 않고 자의로 판단하여 <br />
            적재한 것은 올바르지 않다고 생각합니다. <br />
            <br />
            부스러 여러분들의 허락을 구하지 않고 데이터를 <br />
            무단으로 적재한 것에 대해 이제라도 <br />
            죄송하다는 말씀을 드리고 싶습니다. <br />
          </p>
          <p className="notice__title">
            그러므로
            <br />
            해당 웹앱을 기념비적인 목적으로 남겨도 좋았겠지만 <br />
            그러지 않고 여기서 정리하려고 합니다. <br />
            <br />
            또한 제가 웹앱을 만들 때 <br />
            선뜻 인포 이미지를 제작해주셨던 분도 오늘을 기점으로 <br />
            가지고 계신 인포 데이터를 전부 삭제하실 예정입니다.
            <br />
            <br />
            저의 독단과 강행에 <br />
            깊은 이해를 보여주어 너무나도 감사합니다. <br />
            <br />
            <br />
            From. 헤이치
          </p>
        </div>
      </div>
      {/* <Card infoData={filteredData} /> */}
    </div>
  );
}

export default Info;
