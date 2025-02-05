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
