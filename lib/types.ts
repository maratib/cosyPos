export type OrderInProcess = {
  id: number;
  icon: string;
  name: string;
  items: number | string;
  type: string;
  inProgress: boolean;
};