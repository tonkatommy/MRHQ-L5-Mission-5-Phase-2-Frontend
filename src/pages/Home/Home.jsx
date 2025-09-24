import Header from "../../sharedComponents/Header/Header";
import Hero from "./components/Hero";
import ProductsServices from "./components/Sections/ProductsServices/ProductsServices";
import Sharetank from "./components/Sections/Sharetank/Sharetank";
import Footer from "../../sharedComponents/Footer/Footer";

function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <ProductsServices></ProductsServices>
      <Footer></Footer>
    </>
  );
}

export default Home;
