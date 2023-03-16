type Category = {
  _id: string;
  title: string;
  slug: Slug;
};

type Slug = {
  _type: "slug";
  current: string;
};

type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    url: string;
  };
};

type Product = {
  _id: string;
  category: Category;
  description: string;
  image: Image[];
  price: string;
  slug: Slug;
  title: string;
};

type StripeProduct = {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
};
