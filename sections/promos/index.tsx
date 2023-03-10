import { TabList } from "@/components";

async function fetchCategoriesData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`,
    // works like server side
    { cache: "no-store" }
  );
  const categories: Category[] = await response.json();

  return categories;
}

async function fetchProductsData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`,
    // works like server side
    { cache: "no-store" }
  );

  const products: Product[] = await response.json();

  return products;
}

async function Promos() {
  const categories = await fetchCategoriesData();
  const products = await fetchProductsData();

  return (
    <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
      <div className="spce-y-10 pt-16">
        <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
          New Promos
        </h1>

        <TabList categories={categories} products={products} />
      </div>
    </section>
  );
}

export default Promos;
