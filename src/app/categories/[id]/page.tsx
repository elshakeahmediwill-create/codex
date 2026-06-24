import HeroCarousel from "@/src/components/category/products/Carousel";
import ProductHome from "@/src/components/home/ProductHome";



export default function CategoryProductsPage() {
  return (
    <main className="py-2">
      <HeroCarousel
      />
      <div className="px-5"> <ProductHome /></div>
      
    </main>
  );
}