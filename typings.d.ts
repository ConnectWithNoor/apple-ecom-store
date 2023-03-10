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
