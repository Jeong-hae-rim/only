import "./card.css";
import { InfoDataProps } from "../types/type";
import CardItem from "./CardItem";

const Card = ({ infoData }: InfoDataProps) => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items"></ul>
          {infoData.map((el) => (
            <CardItem
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
  );
};

export default Card;
