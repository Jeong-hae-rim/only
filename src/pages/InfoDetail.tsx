import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { useEffect, useState } from "react";
import infocard from "../assets/infocard.png";
import "./infodetail.css";

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
  author: string;
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
          <div className="table__container">
            <table border={1}>
              <thead>
                <tr>
                  <th className="type">종류</th>
                  <th>제목</th>
                  <th className="price">가격</th>
                  <th>설명</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {infoData.product?.map((product) => (
                  <tr key={product.id}>
                    <td className="type">{product.type}</td>
                    <td>{product.title}</td>
                    <td className="price">{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
