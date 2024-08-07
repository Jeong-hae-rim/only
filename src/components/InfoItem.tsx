import { Link } from "react-router-dom";

type CardProps = {
  path: number;
  label: string;
  src: string;
  title: string;
  description: string;
};

function InfoItem(props: CardProps) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={"/" + props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default InfoItem;
