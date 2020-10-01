export interface Book {
  id: number;
  name: string;
  description?: string;
  author?: string;
  year?: number;
  isRented: boolean;
}
