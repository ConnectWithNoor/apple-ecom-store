"use client";
import { useDispatch } from "react-redux";
import { ShoppingCartIcon as Icon } from "@heroicons/react/24/outline";
import { addToBasket } from "@/redux/slice/basketSlice";
import { toast } from "react-hot-toast";

type Props = {
  product: Product;
};

function ShoppingCartIcon({ product }: Props) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket.`, {
      position: "bottom-center",
    });
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
