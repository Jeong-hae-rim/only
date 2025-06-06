import "./Modal.css";

const CooperModal = ({ card, onClose }: any) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <div className="modal-wrapper">
          <div className="modal-inner">
            {/* <div className="modal-img-wrap">
              <img src={card.src} />
              <label>{card.label}</label>
            </div> */}
            <h2>{card.nickname}</h2>
            <p>X 계정: {card.x_id}</p>
            <button onClick={onClose}>닫기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperModal;
