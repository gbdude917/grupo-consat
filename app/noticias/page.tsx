import type { Metadata } from "next";

import Blogs from "@/components/ContentFormat/BlogSections/Blogs/Blogs";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Noticias de la empresa",
};

const Noticias = () => {
  return (
    <main>
      <Blogs hasLink={false} />
    </main>
  );
};

export default Noticias;
