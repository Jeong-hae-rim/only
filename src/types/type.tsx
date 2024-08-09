interface Product {
  id: number;
  title: string;
  type: string;
  price: string;
  description: string;
  note: string;
}

export interface InfoDataProps {
  infoData: {
    id: number;
    src: string;
    title: string;
    description: string;
    label: string;
    author: string;
    product: Product[]; // 'product'를 포함하도록 수정
  }[];
}
