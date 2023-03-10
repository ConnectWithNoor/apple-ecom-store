"use client";

import { ShoppingCartIcon as Icon } from "@heroicons/react/24/outline";

function ShoppingCartIcon() {
  const addItemToBasket = () => {
    // redux stuff
  };
  return (
    <div
      className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
      onClick={addItemToBasket}
    >
      <Icon className="h-8 w-8 text-white" />
    </div>
  );
}

export default ShoppingCartIcon;
