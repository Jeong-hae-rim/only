import { useState } from "react";
import "./MbtiGame.css";
import GAMEBOY from "../assets/images/gameboy2.png";
import { mbtiData } from "../types/type";

interface Question {
  question: string;
  options: { text: string; value: string }[];
}

const questions: Question[] = [
  {
    question: "카페 앞에서 양호열을 만났다! 그런데 옷에 힘을 좀 준 것 같다...",
    options: [
      { text: "그 옷 뭐냐? 평소엔 그렇게 안 입잖아.", value: "T" },
      { text: "어, 그 옷 너한테 잘 어울린다. 멋지네.", value: "F" },
    ],
  },
  {
    question: "약속 시간을 착각해 좀 일찍 나왔다 고백했는데 별 말을 안 한다...",
    options: [
      { text: "(별 생각 없다.)", value: "S" },
      { text: "왜 아무 말도 안 하지? 바보 같다고 생각하나?", value: "F" },
    ],
  },
  {
    question: "같이 카페에 들어왔다! 이 때, 정대만의 시선을 사로잡은 건...",
    options: [
      { text: "이 카페에서만 구경할 수 있을 것 같은 참신한 DP", value: "F" },
      { text: "카페 메뉴판, 그리고 화장실 위치.", value: "T" },
    ],
  },
  {
    question: "자리를 고르고 음료를 주문 하려고 하는데, 이때...",
    options: [
      {
        text: "(형아임을 보여주고 싶다. 충동적으로) 내가 살게. 넌 가만히 있어.",
        value: "P",
      },
      {
        text: "(이따 또 어디 갈 수도 있으니까.) 여긴 네가 사라. 이따 저녁을 내가 살게.",
        value: "J",
      },
    ],
  },
  {
    question:
      "음료를 주문하고 자리로 돌아가는데, 누가 양호열에게 음료를 쏟았다!",
    options: [
      {
        text: "헉, 괜찮아? 휴지 갖고 올까?! (당황해서 허둥지둥 한다.)",
        value: "F",
      },
      {
        text: "헉, 많이 쏟았냐? 세탁소 갈 정도야? (옷 상태부터 확인한다.)",
        value: "T",
      },
    ],
  },
  {
    question: "자리로 돌아왔는데 양호열이 의외로 세심하다고 말한다.",
    options: [
      { text: "세심하단 말 들은 적 없는데 말해주니 기분은 좋다.", value: "S" },
      {
        text: "뭐지 이 자식 갑자기 이렇게 말하니까 좀 달라 보인다... 잘생겨 보이는 것 같기도...",
        value: "N",
      },
    ],
  },
  {
    question: "양호열이 민망해 하더니 자기 음료도 마셔보라고 한다.",
    options: [
      { text: "오 땡큐. 별 생각없이 받아 마신다.", value: "S" },
      {
        text: "이 자식 이거 무슨 생각이지? 이거 간접 뭐랬는데, 뭐였더라? (생각 삼매경에 빠진다.)",
        value: "N",
      },
    ],
  },
  {
    question: "어찌저찌 마친 카페 데이트! 다음에 또 놀러 나오자고 말하고 싶다.",
    options: [
      { text: "지금 말 안 하면 언제 해! 충동적으로 말한다.", value: "P" },
      {
        text: "양호열 눈치를 보다가 기분 좋아 보일 때 조심스럽게 말한다.",
        value: "J",
      },
    ],
  },
];

function MbtiGame() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);

  // MBTI 결과 계산
  const calculateMBTI = () => {
    const result: Record<string, number> = {
      E: 1,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    answers.forEach((answer) => {
      result[answer] += 1;
    });

    return (
      (result.E > result.I ? "E" : "I") +
      (result.S > result.N ? "S" : "N") +
      (result.T > result.F ? "T" : "F") +
      (result.J > result.P ? "J" : "P")
    );
  };

  // 버튼 클릭 시 MBTI 테스트 시작
  const startGame = () => {
    setIsStarted(true);
  };

  // 사용자의 선택을 저장하고 다음 질문으로 이동
  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const result = calculateMBTI();
      setMbtiResult(result);
    }
  };

  // 테스트 다시 시작
  const restartGame = () => {
    setIsStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setMbtiResult(null);
  };

  return (
    <div className="gameboy-wrapper">
      <div className="gameboy-box">
        <img src={GAMEBOY} className="gameboy-image" />
        {!isStarted ? (
          // 시작하기 버튼
          <div className="button-wrapper">
            <button className="restart gbtn" onClick={startGame}>
              시작하기
            </button>
            <button className="quit gbtn">끝내기</button>
          </div>
        ) : (
          <div className="question-box">
            {mbtiResult ? (
              // MBTI 결과 표시
              <>
                <div>
                  {mbtiData[mbtiResult]?.image && (
                    <img
                      src={mbtiData[mbtiResult].image}
                      alt={mbtiResult}
                      className="mbti-image"
                    />
                  )}
                </div>
                <div className="result">
                  <h3>대만이의 🩷 타입은?</h3>
                  <p className="mbti-name">{mbtiData[mbtiResult]?.name}</p>
                  <button className="quit gbtn" onClick={restartGame}>
                    돌아가기
                  </button>
                </div>
              </>
            ) : (
              // 질문 표시
              <div className="option-box">
                <p className="question">
                  {questions[currentQuestionIndex].question}
                </p>
                <div className="options">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        className="dm-option gbtn"
                        onClick={() => handleAnswer(option.value)}
                      >
                        {option.text}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MbtiGame;
