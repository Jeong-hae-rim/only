import { Link } from "react-router-dom";

type CardProps = {
  path: number;
  label: string;
  src: string;
  title: string;
  description: string;
  author: string[];
};

function CardItem(props: CardProps) {
  const getRandomColor = () => {
    const colors = ["#3243a5", "#e63946", "#f4a261", "#2a9d8f", "#8a4ef5"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={""}>
          <div className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.title}</h5>
            <div className="tags">
              {props.author.map((name, index) => (
                <span
                  key={index}
                  style={
                    { "--tag-bg": getRandomColor() } as React.CSSProperties
                  }
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
