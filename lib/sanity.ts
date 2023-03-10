import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.NEXT_PUBLC_SANITY_API_TOKEN,
  projectId: "n84jhwt5",
  apiVersion: "2023-03-08", // 08 march 2023
  useCdn: false,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
