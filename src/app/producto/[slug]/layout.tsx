import { products } from "@/lib/products";

// Esta función le indica a Next.js qué rutas dinámicas debe generar en el momento del build
export function generateStaticParams() {
  // Tomamos el arreglo de productos en español para generar la lista de slugs
  return products.es.map((p) => ({ slug: p.slug }));
}

export default function ProductoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}