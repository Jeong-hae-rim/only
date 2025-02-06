import "./DateLog.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DateLog() {
  return (
    <div className="log__container">
      <Header />
      <div className="log__wrapper">
        <div className="log__wrapper__inner">
          <div className="log__content">
            <div className="log one">
              <img
                className="log-image"
                src="src/assets/images/date_logs/log1.gif"
              />
              <div className="nes-container with-title message-box">
                <p className="title">#Log 01 OFF-THE-RECORDS</p>
                <section className="message -left">
                  <img
                    className="profile"
                    src="src/assets/images/yeol-profile.png"
                  />
                  <div className="nes-balloon from-left">
                    <p>
                      일정 확인할 때 좀 떨렸지... 잘 될지 걱정도 조금 했었어.
                    </p>
                  </div>
                </section>
              </div>
            </div>
            <div className="log two">
              <img
                className="log-image"
                src="src/assets/images/date_logs/log2.gif"
              />
              <div className="nes-container with-title message-box">
                <p className="title">#Log 02 OFF-THE-RECORDS</p>
                <section className="message -left">
                  <img
                    className="profile"
                    src="src/assets/images/yeol-profile.png"
                  />
                  <div className="nes-balloon from-left">
                    <p>5월에 정말 해낼 수 있을까?</p>
                  </div>
                </section>
              </div>
            </div>
            <div className="log three">
              <img
                className="log-image"
                src="src/assets/images/date_logs/log3.gif"
              />
              <div className="nes-container with-title message-box">
                <p className="title">#Log 03 OFF-THE-RECORDS</p>
                <section className="message -left">
                  <img
                    className="profile"
                    src="src/assets/images/yeol-profile.png"
                  />
                  <div className="nes-balloon from-left">
                    <p>얼굴에 뭐 날아왔을 때 진짜 깜짝 놀랐잖아.</p>
                  </div>
                </section>
              </div>
            </div>
            <div className="log four">
              <img
                className="log-image"
                src="src/assets/images/date_logs/log4.gif"
              />
              <div className="nes-container with-title message-box">
                <p className="title">#Log 04 OFF-THE-RECORDS</p>
                <section className="message -left">
                  <img
                    className="profile"
                    src="src/assets/images/yeol-profile.png"
                  />
                  <div className="nes-balloon from-left">
                    <p>
                      아 이때 짜증 났어. 다리 길다고 자랑해? 예쁘니까 봐준다.
                    </p>
                  </div>
                </section>
                <section className="message -right">
                  <div className="nes-balloon from-right">
                    <p>내가 생각보다 빨리 걸었더라고. 지금은 맞춰 걷고 있어.</p>
                  </div>
                  <img
                    className="profile dam"
                    src="src/assets/images/dam-profile.png"
                  />
                </section>
              </div>
            </div>
            <div className="log five">
              <img
                className="log-image"
                src="src/assets/images/date_logs/log5.gif"
              />
              <div className="nes-container with-title message-box">
                <p className="title">#Log 05 OFF-THE-RECORDS</p>
                <section className="message -left">
                  <img
                    className="profile"
                    src="src/assets/images/yeol-profile.png"
                  />
                  <div className="nes-balloon from-left">
                    <p>얼마 벌었더라? 그냥 적당히 라멘 사줄 수 있을 정도?</p>
                  </div>
                </section>
                <section className="message -right">
                  <div className="nes-balloon from-right">
                    <p>
                      갑자기 "먹을 거 사줄게." 이러더라. 내가 고양이도 아니고.
                    </p>
                  </div>
                  <img
                    className="profile dam"
                    src="src/assets/images/dam-profile.png"
                  />
                </section>
              </div>
            </div>
            <div className="log six">
              <img
                className="log-image"
                src="src/assets/images/date_logs/log6.gif"
              />
              <div className="nes-container with-title message-box">
                <p className="title">#Log 06 OFF-THE-RECORDS</p>
                <section className="message -left">
                  <img
                    className="profile"
                    src="src/assets/images/yeol-profile.png"
                  />
                  <div className="nes-balloon from-left">
                    <p>이때가 굉장히 추웠었죠?</p>
                  </div>
                </section>
                <section className="message -right">
                  <div className="nes-balloon from-right">
                    <p>응, 그래도 시민들이랑 같이 있어서 춥지 않았어.</p>
                  </div>
                  <img
                    className="profile dam"
                    src="src/assets/images/dam-profile.png"
                  />
                </section>
              </div>
            </div>
            <div className="log seven">
              <img
                className="log-image"
                src="src/assets/images/date_logs/log7.gif"
              />
              <div className="nes-container with-title message-box">
                <p className="title">#Log 07 OFF-THE-RECORDS</p>
                <section className="message -left">
                  <img
                    className="profile"
                    src="src/assets/images/yeol-profile.png"
                  />
                  <div className="nes-balloon from-left">
                    <p>삼색냥이 이름 지어줬어. 댐냥이.</p>
                  </div>
                </section>
                <section className="message -right">
                  <div className="nes-balloon from-right">
                    <p>이 자식 날 진짜 고양이로 생각하는 거 아니야?</p>
                  </div>
                  <img
                    className="profile dam"
                    src="src/assets/images/dam-profile.png"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DateLog;
