interface Product {
  id: number;
  title: string;
  type: string;
  price: string;
  description: string;
  note: string;
}

export interface CardDataProps {
  infoData: CardProps;
  onClick: (card: CardProps) => void;
}

export type CardProps = {
  id: number; // 추가
  src: string;
  title: string;
  description: string;
  label: string;
  author: string[];
  product: Product[]; // 추가
};

export type FilterData = {
  id: number;
  src: string;
  title: string;
  description: string;
  label: string;
  author: string[];
  product: Product[];
}[];

export interface InfoDataProps {
  infoData: FilterData;
  onClick: (card: FilterData[number]) => void;
}

export const mbtiNames: Record<string, string> = {
  ISTP: "마왕",
  ISFP: "양키",
  ISTJ: "파일럿",
  ISFJ: "메이드",
  INTP: "퇴마사",
  INTJ: "경호원",
  INFJ: "탐정",
  INFP: "문학소년",
  ENTJ: "농구선수",
  ENTP: "용사",
  ENFJ: "신부",
  ENFP: "어린왕자",
  ESTJ: "경찰",
  ESFJ: "감독",
  ESTP: "연예인",
  ESFP: "양키",
};
