import ProductGrid from "@/components/Products";
import Home from "./home/page";
import Share from "@/components/Share";
import Inspirations from "@/components/Feature";


export default function HomePage() {
  return (
  <div>
    <Home/>
    <ProductGrid/>
    <Inspirations/>
    <Share/>
  </div>
  );
}
