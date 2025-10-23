import { ReactQueryProvider } from "@/components/shared/ReactQueryProvider";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

export const metadata = {
  title: "Invitaciones digitales únicas | Tu marca",
  description:
    "Crea invitaciones digitales personalizadas para cualquier evento. Elige tu categoría y sorprende a tus invitados con diseños exclusivos.",
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: any }>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
