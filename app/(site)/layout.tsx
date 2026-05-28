import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { StickyMobileAd } from "@/components/StickyMobileAd/StickyMobileAd";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="appMain">{children}</main>
      <Footer />
      <StickyMobileAd />
    </>
  );
}
