import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { useEffect, useState } from "react";

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
      <img width="100%" src={getImgUrl(infoData.id)}></img>
      <p>{infoData.label}</p>
    </>
  );
}

export default InfoDetail;
