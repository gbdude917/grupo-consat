import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

import Footer from "@/components/PageSections/NavAndFooter/Footer/Footer";

import "./globals.css";
import BurgerContainer from "@/components/PageSections/NavAndFooter/BurgerContainer/BurgerContainer";

export const metadata: Metadata = {
  title: {
    template: "Grupo Consat | %s",
    default: "Grupo Consat",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BurgerContainer>{children}</BurgerContainer>

        <Footer />

        <SpeedInsights />
      </body>

      <Analytics />
    </html>
  );
}

export default RootLayout;
