import "./info.css";
import { useState } from "react";
import { data } from "../data/data";
import Card from "../components/Card";
import SearchInput from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Finding from "../components/Finding";
import { FilterData } from "../types/type";
import Modal from "../components/Modal";

function Info() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<FilterData[number] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const handleCardClick = (card: FilterData[number]) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div className="info__container">
      <Header />
      {isModalOpen && selectedCard && (
        <Modal card={selectedCard} onClose={closeModal} />
      )}
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
              {filteredData.length !== 0 ? (
                <Card infoData={filteredData} onClick={handleCardClick} />
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
