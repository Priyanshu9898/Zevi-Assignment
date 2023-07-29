import React, { FC, useEffect, useState } from "react";
import { generateData } from "../../constants/GenerateData";
import { ProductData } from "../../types";

const ProductPage: FC = () => {
  const brands = ["H&M", "Mango"];
  const ratings = [1, 2, 3, 4, 5];
  const prices = [
    { label: "Under 500", min: 0, max: 500 },
    { label: "1000 to 3000", min: 1000, max: 3000 },
  ];

  const [productData, setProductData] = useState<ProductData[]>([]);
  const [filterBrand, setFilterBrand] = useState<string[]>([]);
  const [filterRating, setFilterRating] = useState<number[]>([]);
  const [filterPrice, setFilterPrice] = useState<string[]>([]);

  useEffect(() => {
    const data = generateData();
    setProductData(data);
  }, []);

  //   const filteredProducts = productData.filter((product) => {
  //     const brandCheck = filterBrand.length
  //       ? filterBrand.includes(product.brand)
  //       : true;
  //     const ratingCheck = filterRating.length
  //       ? filterRating.includes(product.rating)
  //       : true;
  //     const priceCheck = filterPrice.length
  //       ? filterPrice.some(
  //           (price) =>
  //             product.price >= prices.find((p) => p.label === price)?.min &&
  //             product.price <= prices.find((p) => p.label === price)?.max
  //         )
  //       : true;
  //     return brandCheck && ratingCheck && priceCheck;
  //   });

  //   const handleCheckboxChange = (
  //     setFilterFunction: React.Dispatch<
  //       React.SetStateAction<string[] | number[]>
  //     >,
  //     value: string | number
  //   ) => {
  //     setFilterFunction((prev) =>
  //       prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
  //     );
  //   };

  return (
    <>
      <div>
        <div className="sidebar">
          <h3>Brands</h3>
          {brands.map((brand) => (
            <div key={brand}>
              <input
                type="checkbox"
                id={`brand-${brand}`}
                // onChange={}
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </div>
          ))}

          <h3>Ratings</h3>
          {ratings.map((rating) => (
            <div key={rating}>
              <input
                type="checkbox"
                id={`rating-${rating}`}
                // onChange={() => handleCheckboxChange(setFilterRating, rating)}
              />
              <label htmlFor={`rating-${rating}`}>{rating}</label>
            </div>
          ))}

          <h3>Price</h3>
          {prices.map((price) => (
            <div key={price.label}>
              <input
                type="checkbox"
                id={`price-${price.label}`}
                // onChange={() =>
                //   handleCheckboxChange(setFilterPrice, price.label)
                // }
              />
              <label htmlFor={`price-${price.label}`}>{price.label}</label>
            </div>
          ))}
        </div>

        {/* <div className='product-grid'>
        {filteredProducts.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </div> */}
      </div>
    </>
  );
};

export default ProductPage;
