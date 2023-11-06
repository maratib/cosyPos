export type OrderInProcess = {
  id: number;
  icon: string;
  name: string;
  items: number;
  type: string;
  inProgress: boolean;
};

export type SwipeItems = {
  id: number;
  title: string;
  speed: string;
  price: string;
};