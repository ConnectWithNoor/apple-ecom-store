import { ProviderWrapper } from "@/components";
import { Metadata } from "next";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
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
