import "./infodetail.css";
import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { useEffect, useState } from "react";
import infocard from "../assets/infocard.png";

interface Product {
  id: number;
  title: string;
  type: string;
  price: string;
  description: string;
  note: string;
}

interface InfoData {
  id: number;
  src: string;
  title: string;
  description: string;
  label: string;
  author: string[];
  path?: string;
  product?: Product[];
}

function InfoDetail() {
  const param = useParams<{ id: string }>();
  const [infoData, setInfoData] = useState<InfoData | null>(null); // Change to single InfoData object or null

  useEffect(() => {
    if (param.id) {
      const filteredData = data.find(
        (el: InfoData) => param.id === String(el.id)
      ); // Adjust the type
      setInfoData(filteredData || null);
    }
  }, [param.id]);

  function getImgUrl(name: number) {
    return new URL(`../assets/images/${name}.png`, import.meta.url).href;
  }

  if (!infoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {getImgUrl(infoData.id).indexOf("undefined") < 0 ? (
        <div className="info__detail__section">
          <div>
            <img width="100%" src={getImgUrl(infoData.id)}></img>
          </div>
        </div>
      ) : (
        <div>
          <img width="100%" src={infocard}></img>
          <p className="info__detail__description">
            {infoData.label} 부스는 준비 중입니다!
          </p>
        </div>
      )}
    </div>
  );
}

export default InfoDetail;
