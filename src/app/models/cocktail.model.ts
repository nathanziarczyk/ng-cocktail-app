export class Cocktail {
  id: number;
  name: string;
  category: string;
  thumbnail: string;

  constructor(id: number, name: string, category: string, thumbnail?: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.thumbnail = thumbnail || ':(';
  }
}
