"use client";

import { selectBasketItems } from "@/redux/slice/basketSlice";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function BasketIcon() {
  const basketItems = useSelector(selectBasketItems);

  return (
    <Link href="/checkout">
      <div className="relative cursor-pointer">
        {basketItems.length > 0 && (
          <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            {basketItems.length}
          </span>
        )}
        <ShoppingBagIcon className="headerIcon" />
      </div>
    </Link>
  );
}

export default BasketIcon;
