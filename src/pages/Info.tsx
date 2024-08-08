import "./info.css";
import InfoItem from "../components/InfoItem";
import { data } from "../data/data";

function Info() {
  return (
    <div>
      <h1 className="title">LOVE PUNCH</h1>
      <h2 className="title">통합 부스 & 인포</h2>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items"></ul>
            {data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                author={el.author}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
