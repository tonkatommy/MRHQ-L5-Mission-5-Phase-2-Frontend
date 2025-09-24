import Header from "../../sharedComponents/Header/Header";
import Hero from "./components/Hero";
import ProductsServices from "./components/Sections/ProductsServices/ProductsServices";
import Sharetank from "./components/Sections/Sharetank/Sharetank";
import Features from "./components/Sections/Features/Features";
import Locate from "./components/Sections/Locate/Locate";
import Footer from "../../sharedComponents/Footer/Footer";

function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <ProductsServices></ProductsServices>
      <Sharetank></Sharetank>
      <Features></Features>
      <Locate></Locate>
      <Footer></Footer>
    </>
  );
}

export default Home;
