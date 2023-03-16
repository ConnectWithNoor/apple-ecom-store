import { Header } from "@/sections";
import CheckoutSection from "@/sections/checkout/CheckoutSection";
import { Metadata } from "next/types";

function Checkout() {
  return (
    <>
      <Header />
      <CheckoutSection />;
    </>
  );
}

export const metadata: Metadata = {
  title: "Checkout | Apple Ecommerce Store",
  description: "The Web application is a redesign concept of Apple store.",
  authors: {
    name: "Noor Muhammad",
    url: "https://connectwithnoor.vercel.app/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "logo",
      url: "/logo.png",
    },
  },
};

export default Checkout;
