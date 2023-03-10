import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`
  *[_type == 'product'] {
    _id, slug, image, description, title, price,
    category -> { _id ,title, slug }
  } | order(price desc)
`;

  const products: Product[] = await sanityClient.fetch(query);

  return NextResponse.json(products, {
    status: 200,
  });
}
