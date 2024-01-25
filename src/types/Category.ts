export const CATEGORY = {
  COMPUTER_SCIENCE: 'Computer Science',
  GAME_DEVELOPMENT: 'Game Dev'
} as const;

export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];

export interface Item {
  name: string;
  url: string;
  category: Category;
  addDate: Date;
}
