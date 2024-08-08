import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { useEffect, useState } from "react";
import infocard from "../assets/infocard.png";
import "./infodetail.css";

interface InfoData {
  id: number;
  src: string;
  title: string;
  description: string;
  label: string;
  author: string;
  path?: string;
}

function InfoDetail() {
  const param = useParams<{ id: string }>();
  const [infoData, setInfoData] = useState<InfoData | null>(null);

  useEffect(() => {
    if (param.id) {
      const filteredData = data.find((el) => param.id === String(el.id));
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
    <>
      {getImgUrl(infoData.id).indexOf("undefined") < 0 ? (
        <img width="100%" src={getImgUrl(infoData.id)}></img>
      ) : (
        <>
          <img width="100%" src={infocard}></img>
          <p className="info__detail__description">
            {infoData.label} 부스는 준비 중입니다!
          </p>
        </>
      )}
    </>
  );
}

export default InfoDetail;
