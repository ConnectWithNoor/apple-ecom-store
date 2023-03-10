"use client";

import { Tab } from "@headlessui/react";
import React from "react";
import { ProductCard } from "../";

type Props = {
  categories: Category[];
  products: Product[];
};

function TabList({ categories, products }: Props) {
  const showProduct = (categoryId: string) => {
    const filteredProducts = products.filter(
      (product) => product.category._id === categoryId
    );

    return filteredProducts.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  };

  return (
    <Tab.Group>
      <Tab.List className="flex justify-center">
        {categories.map((category) => (
          <Tab
            key={category._id}
            id={category._id}
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected
                  ? "borderGradient bg-[#35383C] text-white"
                  : "border-b-2 border-[#35383C] text-[#747474]"
              }`
            }
          >
            {category.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
        {categories.map((category) => (
          <Tab.Panel key={category._id} className="tabPanel">
            {showProduct(category._id)}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TabList;
