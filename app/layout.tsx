import { ReduxProvider } from "@/components";
import { Metadata } from "next";
import "./globals.css";

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
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
