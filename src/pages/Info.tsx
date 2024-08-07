import "./info.css";
import InfoItem from "../components/InfoItem";
import {
  ho_data,
  yeol_data,
  dae_data,
  man_data,
  lo_data,
  ve_data,
  pun_data,
  ch_data,
} from "../data/data";

function Info() {
  return (
    <div>
      <h1 className="title">LOVE PUNCH INFO</h1>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items"></ul>
            {ho_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
            {yeol_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
            {dae_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
            {man_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
            {lo_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
            {ve_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
            {pun_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
                description={el.description}
                label={el.label}
                path={el.id}
              />
            ))}
            {ch_data.map((el) => (
              <InfoItem
                key={el.title}
                src={el.src}
                title={el.title}
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
