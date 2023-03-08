import { Header } from "@/components";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Apple Ecommerce Store | Made by ConnectWithNoor",
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
