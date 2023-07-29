import { ProductData } from "../types";
import { faker } from "@faker-js/faker";

const brands = ["H&M", "Mango"];

const fashionWords = ['Dress', 'Shirt', 'Pants', 'Skirt', 'Blouse', 'Jacket', 'Trousers', 'Sweater', 'Jeans', 'Tee', 'Coat', 'Blazer', 'Suit', 'Shorts', 'Hoodie'];

const generateFashionProductName = (): string => {
  const adjective = faker.commerce.productAdjective();
  const material = faker.commerce.productMaterial();
  const fashionWord = fashionWords[Math.floor(Math.random() * fashionWords.length)];

  return `${adjective} ${material} ${fashionWord}`; // This will generate product names like 'Small Steel Shirt', 'Rustic Concrete Pants', etc.
};


export const generateData = (): ProductData[] => {
  const data: ProductData[] = [];
  for (let i = 0; i < 100; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];

    const image = faker.image.urlLoremFlickr({ category: "fashion" });
    const title = generateFashionProductName();
    const price = parseFloat(faker.commerce.price({ min: 100, max: 3000 }));
    const actualPrice = Math.max(price, price + 1000);
    const rating = Math.floor(Math.random() * 5) + 1;
    const totalRatings = Math.floor(Math.random() * 1000) + 1;

    data.push({
        image,
        title,
        price,
        actualPrice,
        rating,
        totalRatings,
        brand,
    });
  }
  return data;
};
