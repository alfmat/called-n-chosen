export interface Article {
  id: number;
  title: string;
  route: string;
  author: string;
  date?: string;
  text: string[];
}
