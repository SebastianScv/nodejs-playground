export default class Product {
  id: string | null;
  title: string;
  description: string;
  price: number;
  image: string;

  constructor(id: string | null, title: string, description: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
