import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`
  *[_type == 'category'] {
    _id, slug, title
   }
`;

  const categories = await sanityClient.fetch(query);

  return NextResponse.json(categories, {
    status: 200,
  });
}
