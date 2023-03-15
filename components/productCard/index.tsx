import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { ShoppingCartIcon } from "../";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className="w-320px flex h-fit select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>

        <ShoppingCartIcon product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
