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

export interface InfoDataProps {
  infoData: CardProps;
  onClick: (card: CardProps[number]) => void;
}
