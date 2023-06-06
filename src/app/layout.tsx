import { data } from "data";
import "./globals.css";

export const metadata = {
  title: data.name,
  description: data.description,
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-32x32.png",
    apple: "/favicons/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicons/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <head></head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
