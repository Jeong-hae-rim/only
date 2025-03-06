import { useState } from "react";
import "./MbtiGame.css";
import GAMEBOY from "../assets/images/gameboy.png";
import { mbtiData } from "../types/type";

interface Question {
  question: string;
  options: { text: string; value: string }[];
}

const questions: Question[] = [
  {
    question:
      "카페 앞에서 대만 군을 만났다! 그런데 왠지 오래 기다린 것 같다...",
    options: [
      { text: "대만 군, 안녕? 웬일로 먼저 나왔어?", value: "T" },
      { text: "대만 군, 오래 기다렸어? 더 빨리 나올 걸 그랬네...", value: "F" },
    ],
  },
  {
    question: "대만 군이 약속을 착각했다고 한다...",
    options: [
      { text: "바보 같은데 귀엽다.", value: "F" },
      { text: "다리 아플 텐데 들어가서 쉬지.", value: "T" },
    ],
  },
  {
    question: "카페에 들어왔다. 같이 앉을 자리는?",
    options: [
      { text: "창가 쪽 경치를 구경할 수 있는 예쁜 테이블", value: "F" },
      { text: "주변에 사람이 없고 움직이기 편하고 실용적인 자리", value: "T" },
    ],
  },
  {
    question: "자리를 골랐다. 음료를 주문하려 하는데, 이때...",
    options: [
      { text: "(오늘이 마지막일 수 있다.) 내가 다 낼게.", value: "P" },
      {
        text: "(오늘만 날은 아니다. 훗날을 도모하며) 대만 군, 내가 케이크 살까?",
        value: "J",
      },
    ],
  },
  {
    question:
      "음료를 주문하고 자리로 돌아가려는데 누군가 대만 군에게 음료를 쏟았다!",
    options: [
      { text: "정신 똑바로 안 차려? 노려본다.", value: "P" },
      {
        text: "화가 나지만 당장 정대만 옷 상태부터 체크한다.",
        value: "J",
      },
    ],
  },
  {
    question: "우여곡절 끝에 자리로 돌아왔다. 대만 군이 갑자기 멋지다고 한다.",
    options: [
      { text: "멋진가? 대만 군 눈에 멋졌으면 됐지.", value: "S" },
      {
        text: "(너와 결혼까지 생각했어! 상상의 나래 펼치기.)",
        value: "N",
      },
    ],
  },
  {
    question: "대만 군이 갑자기 케이크를 먹여주려고 한다. '아 해봐, 아~'",
    options: [
      { text: "별 생각없이 받아 먹는다.", value: "S" },
      {
        text: "이거 받아 먹으면 우리 오늘부터 1일? 무수한 생각이 든다.",
        value: "N",
      },
    ],
  },
  {
    question: "어찌저찌 마친 카페 데이트! 이젠 고백하고 싶다.",
    options: [
      { text: "에라 모르겠다! 분위기에 맡겨 고백한다.", value: "P" },
      {
        text: "이 순간만을 기다렸다. 달달 외운 멘트를 줄줄 왼다.",
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
      E: 0,
      I: 1,
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
            <button className="start gbtn" onClick={startGame}>
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
                  <h3>호열이의 🩷 타입은?</h3>
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
                        className="option gbtn"
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
