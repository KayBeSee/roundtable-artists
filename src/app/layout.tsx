import { data } from "data";
import "./globals.css";
import Script from "next/script";

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
      <body className="min-h-screen">
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${data.analytics.googleAnalyticsCode}`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${data.analytics.googleAnalyticsCode}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
